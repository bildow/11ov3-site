# Task 238 Canonize Pass

## Scope

Bring `patronage-lab` to a deploy-safe, canonical public state without pretending the later patronage spine is already built.

## Build Notes

- Replaced the malformed shared header partial with a clean nav component.
- Added the missing shared stylesheet referenced by the public pages.
- Hardened `js/app.js` so partial injection fails cleanly and the mobile menu works after async header insertion.
- Added `ideation/side-quest-round.md` into tracked branch state.
- Removed the broken footer link to `/about.html` and pointed it at `/why/`.
- Replaced dead `/gifts/*` asset links with a placeholder `gift-package.html` experience so gift redemption no longer lands on missing files.
- Rewrote malformed `ambassadors/index.html` and `why/index.html` into valid page structure.
- Converted `donate/index.html` from fake dead checkout buttons into an honest staging page that points users to current available routes.

## Exploits / Broken States Found

- Shared partial contamination: `partials/header.html` included stray `<meta>` and page-specific head content, which risked broken DOM injection and inconsistent navigation state.
- Broken route exposure: footer linked to `/about.html`, which does not exist in the repo.
- Dead gift fulfillment path: public gift records pointed to `/gifts/*` files that do not exist.
- Malformed HTML in `ambassadors/index.html`: nested section started inside an open paragraph and the page never closed through the shared footer.
- Malformed HTML in `why/index.html`: section and list nesting were invalid, which risked layout and accessibility breakage.
- Fake checkout affordances: `donate/index.html` presented `href="#"` donation buttons that looked live but were not wired.

## Point Failures Still Open

- The real donation spine is not built yet. There is no canonical receipt, unlock issuance, or partner-specific checkout routing in this branch.
- Gift redemption is still public-data driven and placeholder-based. Real managed issuance belongs to the later gift vault task.
- Public pages still rely on Tailwind CDN and ad hoc inline page scripts; this pass only canonized the existing static site shape.

## Next Horizontal Slice

Task `236`: donation entry -> tier selection -> proof/receipt handoff -> unlock issuance -> gift redemption.
