const crypto = require('crypto');

const FALLBACK_SECRET = '11ov3-dev-patronage-secret';

function getSecret() {
  return process.env.PATRONAGE_SIGNING_SECRET || FALLBACK_SECRET;
}

function encode(data) {
  return Buffer.from(JSON.stringify(data)).toString('base64url');
}

function decode(value) {
  return JSON.parse(Buffer.from(value, 'base64url').toString('utf8'));
}

function sign(payload) {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url');
}

function issueToken(claim) {
  const payload = encode(claim);
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token) {
  const [payload, signature] = String(token || '').split('.');
  if (!payload || !signature) return null;
  const expected = sign(payload);
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return null;
  }
  return decode(payload);
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const input = JSON.parse(event.body || '{}');
    const createdAt = new Date().toISOString();
    const receiptId = `vox-${Date.now().toString(36)}-${crypto.randomBytes(3).toString('hex')}`;
    const claimCode = crypto.randomBytes(3).toString('hex').toUpperCase();
    const claim = {
      version: 1,
      receiptId,
      createdAt,
      supporterName: input.supporterName,
      supporterEmail: input.supporterEmail,
      amount: input.amount,
      paymentMethod: input.paymentMethod,
      note: input.note,
      tier: input.tier,
      gift: input.gift,
      claimCode
    };
    const token = issueToken(claim);
    return json(200, {
      mode: process.env.PATRONAGE_SIGNING_SECRET ? 'managed' : 'managed-dev',
      receipt: claim,
      claim: {
        token,
        claimCode,
        url: `/gift.html?claim=${encodeURIComponent(token)}`
      }
    });
  }

  if (event.httpMethod === 'GET') {
    const token = event.queryStringParameters?.claim;
    const claim = verifyToken(token);
    if (!claim) {
      return json(404, { ok: false, error: 'claim_not_found' });
    }
    return json(200, { ok: true, mode: process.env.PATRONAGE_SIGNING_SECRET ? 'managed' : 'managed-dev', claim });
  }

  return json(405, { ok: false, error: 'method_not_allowed' });
};
