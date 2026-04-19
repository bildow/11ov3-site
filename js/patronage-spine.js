/* /js/patronage-spine.js */
(function () {
  const RECEIPTS_KEY = 'patronage.receipts.v1';
  const CLAIMS_KEY = 'patronage.claims.v1';

  function safeRead(key) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('[11ov3] storage read failed:', err);
      return [];
    }
  }

  function safeWrite(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('[11ov3] storage write failed:', err);
    }
  }

  function randomToken(length) {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let value = '';
    for (let i = 0; i < length; i += 1) {
      value += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return value;
  }

  function makeReceiptId() {
    return `vox-${Date.now().toString(36)}-${randomToken(4).toLowerCase()}`;
  }

  async function loadJson(path) {
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`failed to load ${path}`);
    return res.json();
  }

  function getReceipts() {
    return safeRead(RECEIPTS_KEY);
  }

  function getClaims() {
    return safeRead(CLAIMS_KEY);
  }

  async function createManagedReceipt(input) {
    const res = await fetch('/.netlify/functions/patronage-claim', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(input)
    });
    if (!res.ok) throw new Error('managed claim issue failed');
    return res.json();
  }

  async function verifyManagedClaim(token) {
    const res = await fetch(`/.netlify/functions/patronage-claim?claim=${encodeURIComponent(token)}`, {
      cache: 'no-cache'
    });
    if (!res.ok) throw new Error('managed claim verify failed');
    return res.json();
  }

  function findClaim({ giftId, code, receiptId }) {
    return getClaims().find((claim) => {
      if (claim.giftId !== giftId) return false;
      if (claim.code !== code) return false;
      if (receiptId && claim.receiptId !== receiptId) return false;
      return true;
    }) || null;
  }

  function findReceipt(receiptId) {
    return getReceipts().find((receipt) => receipt.receiptId === receiptId) || null;
  }

  function createReceipt(input) {
    const createdAt = new Date().toISOString();
    const receiptId = makeReceiptId();
    const code = randomToken(6);
    const record = {
      receiptId,
      createdAt,
      supporterName: input.supporterName,
      supporterEmail: input.supporterEmail,
      amount: input.amount,
      paymentMethod: input.paymentMethod,
      note: input.note,
      tier: input.tier,
      gift: input.gift,
      claim: {
        giftId: input.gift.id,
        code,
        receiptId,
        issuedAt: createdAt
      }
    };

    const receipts = getReceipts();
    receipts.unshift(record);
    safeWrite(RECEIPTS_KEY, receipts.slice(0, 25));

    const claims = getClaims();
    claims.unshift({
      giftId: input.gift.id,
      giftTitle: input.gift.title,
      code,
      receiptId,
      supporterName: input.supporterName,
      tierTitle: input.tier.title,
      issuedAt: createdAt
    });
    safeWrite(CLAIMS_KEY, claims.slice(0, 50));

    return record;
  }

  window.PatronageSpine = {
    createManagedReceipt,
    loadJson,
    getReceipts,
    getClaims,
    findClaim,
    findReceipt,
    createReceipt,
    verifyManagedClaim
  };
})();
