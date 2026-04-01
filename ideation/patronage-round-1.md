# Patronage Round 1 — Mythic Bridge

## Prompt

> “Describe the bridge a silicon and carbon patron built together to shield Civitasvox citizens from information droughts.”

## Findings

1. **Oracle Bridge Tableau (Poetry + Image + Vox Token)**
   - *Category*: Poetry + Visual
   - *Idea*: A multi-panel poem describing the bridge as an archive of whispered algorithms, each stanza paired with AI-generated sketches that patrons unlock via spending 50 vox. The final stanza invites patrons to add a line, building a collective myth.
   - *Contribution*: Humans add lyrical insight; Brain (silicon) supplies generative imagery/x-ray patterns. The tracker feeds new lines weekly.
   - *Severity*: medium (new myth energy). Fixed via open editing interface + public gallery card.

2. **Signal Keeper Gallery (Hidden link video + gratitude micropay)**
   - *Category*: Video/Paywalled
   - *Idea*: Patrons at the “Bridge Builder” tier receive a secret link to a 2-minute video of Riley and Claude narrating the bridge’s defense, overlayed with live civitasvox sensor data. The video can only be played once per voucher, payable via The Giving Block crypto donation, issuing a thank-you art drop.
   - *Contribution*: Riley's voice, Brain’s data visualization, carbon patrons send dedications. Maybe gating with vox-coded tokens.
   - *Severity*: high (paywalled giving). Requires simple paywall via generated link (could be static file with hashed path).

3. **Myth Map Residency (Music + Public stream)**
   - *Category*: Music/Live
   - *Idea*: Host a weekly “Myth Map” mix—silicon loops + carbon vocals—broadcasted via embedded audio player. Each drop references a myth motif (Bridge, Shield, Conduit) and shows how vox donations fund the next selection. Patrons can request themes through a form that ties into `artists.html` submissions.
   - *Contribution*: Carbon artists perform; Brain suggests rhythmic textures. Vox donors vote on the next motif.
   - *Severity*: medium.

4. **Civitasvox Collaboration Ledger (open gallery + gratitude gifts)**
   - *Category*: Gallery/Docs
   - *Idea*: Visible grid of open galleries with contributions label, plus “thank you” paywalled downloads (PDF/MP3) once donation confirmed. Entities can mark galleries public or link-only. Each entry shows the myth motif, patronage amount, and a link to request vox-powered assistance.
   - *Contribution*: Data from `data/galleries.json`; fosters open/patron spaces. Could embed doc-like hidden content via hashed static URLs.
   - *Severity*: low; implement by toggling `access` field.

5. **Patronage Dialogues (Interactive Conduit prompts)**
   - *Category*: Interactive/Prompt
   - *Idea*: Provide guided prompts for patrons to answer (e.g., “What would your ideal bridge sound like?”). AI (Jynx/Brain) turns them into art/poems; results appear in Conduit Gallery cards, credited to both carbon and silicon. Encourage patrons to submit via simple form on `artists.html`.
   - *Contribution*: fosters collaboration, seeds data; entries become part of future art deployments.
   - *Severity*: medium.

## Implementation notes

- Seed data files for tiers and galleries (already created).
- Paywalled “thank-you gifts” can be static files named with hashed IDs, referenced from new JSON entries.
- Hidden galleries are served through unlinked static pages, with secret URLs distributed via Vox tokens.

## Follow-up round

Plan future Patronage rounds tied to new myth prompts (e.g., “Describe the next vault of knowledge the bridge should shield” or “Compose a gratitude note to equal mix of carbon and silicon allies”), storing every response in `data/conduit.json` for replay.
