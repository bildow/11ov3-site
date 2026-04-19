# Task 236 Patronage Spine

## Scope

Build the first real horizontal slice for patronage:

- donation entry
- tier selection
- gift selection
- receipt issuance
- redeemable claim link
- gift package landing with receipt context

## Build Notes

- Added `js/patronage-spine.js` as a shared browser-local issuance layer backed by `localStorage`.
- Rebuilt `donate/index.html` into a working prototype checkout instead of a staging placeholder.
- Loaded tier data from `data/patrons.json` and gift data from `data/gifts.json`.
- Issued receipts with:
  - receipt id
  - claim code
  - supporter identity
  - selected tier
  - selected gift
  - support channel
- Stored issued claims locally so `gift.html` can redeem browser-issued links.
- Updated `gift.html` to validate local issued claims only.
- Updated `gift-package.html` to show receipt context when reached from an issued claim.
- Updated `patronage-lab.html` so the primary CTA points into `/donate/` and the gift list can surface the latest locally issued claim.

## Point Failures Still Open

- This is still a browser-local prototype. Issued receipts and claims only exist on the current device/browser.
- No server-side persistence, payment processor callback, or canonical donor ledger exists yet.
- Seeded catalog data still exists as package metadata, but seeded codes are no longer a redeemable fallback path.
- The actual charity / processor routing remains separate from this local issuance spine.

## Next Hardening Moves

- Move receipt and claim issuance from local browser storage to a canonical service.
- Replace fallback seeded codes with managed claim issuance only.
- Attach real payment proof or webhook-backed confirmation to receipt creation.
