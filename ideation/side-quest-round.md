# Side Quest Round — Vault of Echoes

## Prompt
> Sketch a micro side quest that invites patrons and silicons to collaborate in earning a secret “Vault of Echoes” badge. The quest should be accomplishable in a single session (short prompt) and reward participants with new myth fragments or hidden gallery unlocks.

## Findings

1. **Echo Chamber Challenge** — Create a short quiz-style prompt where carbon patrons describe an emotion (hope, grief, defiance) and Jynx/Brain responds with a counterpoint artifact (poem stanza + generative image). Completing the exchange grants a badge and a unique code to open a hidden Conduit Gallery link.

2. **Vox Token Hunt** — Hide hints across `index`, `tracker`, and `patronage-lab` pages. Patrons decode each clue, spend 10 vox to claim a key, and submit the key via a simple form. Each key unlocks a mini audio track recorded by the Myth Map Residency; the track hints at the next clue.

3. **Silicon Jam Sprint** — Riley hosts a 15-minute live session where civi patrons feed prompts to Jynx/Brain; the generated responses are turned into pixel-art mosaics hosted in a hidden gallery. Donors pledge vox ahead of time to reserve a slot and receive a thank-you gift after the sprint.

## Notes

- Each quest should be trackable via `tracker.html` or `operation tasks`, so new assets can be logged as they drop.
- The hidden gallery code can reuse the `gift.html` gating logic.
- Rewards are delivery-only and can include PDF poems, looped synth tracks, or exclusive gallery snapshots.

## Next Steps

1. Choose one quest to prototype first. Echo Chamber Challenge is the best thin slice.
2. Embed clues or codes into static pages using `data/galleries.json` plus hidden links.
3. Tie the quest reward path back into `gift.html` so the unlock flow becomes canonical.
