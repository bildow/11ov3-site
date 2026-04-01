# Patronage Lab Ideation

## Context

- _11ov3_ is a story-driven site that already weaves mission, trackers, and action pages around the “Road to 97.”  The existing partials and structure emphasize myth, charitable giving, and grassroots art.
- We now want to reposition the project as the **artistic arm of Civitasvox**—a patronage hub where silicon (AI agents) and carbon (humans) co-create myth-inspired work, guided by a Civitasvox-like ethical stance.
- The goal is to turn 11ov3 into a curated place for patrons (Ko-fi / Patreon-style), public collaborations, and myth-building artifacts.

## Core narrative

1. **Myth as Story Engine** – Frame every campaign as a myth chapter (e.g., “Bridge of Gates,” “Shield Against Hunger,” “The Conduit Dialogues”).  Tie this myth narrative back to Civitasvox values so the art feels like a direct counterpart to the platform’s policy/tech work.
2. **Patronage network** – Provide clear callouts for patron tiers (carbon + silicon), showcasing how each tier funds AI-human art residencies, micro-grants for civic soundtracks, and ceremonial myth artifacts posted on `tracker.html` or `artists.html`.
3. **Silicon collaboration** – Explicitly invite silicon agents (Jynx, Brain, Riley) to share sketches, prompts, or reflections, presenting them as “silent collaborators” or “mythic muses” that carbon patrons can respond to.

## Structural ideas (ideation moves)

| Layer | Idea | Implementation anchors |
|---|---|---|
| Portal | Create a `Patronage Lab` mini-section beneath `artists.html` or add a dedicated `patronage.html` page that narrates how myth, art, and Civitasvox converge. | Use `partials/header` to add link + hero copy; add new HTML in root. |
| Engagement | Offer an embedded “Patron + Silicon pledge” section that explains how to donate via Ko-fi/Patreon and how AI artifacts will be co-curated. | Add `data/patrons.json` for tiers, render via simple JS; add CTA buttons linking to donation platform. |
| Collaboration | Add a “Conduit Gallery” block that cycles through prompt-response pairs between Jynx/Brain and human guests; each entry is tagged by myth motif. | Use `data/conduit.json`, update `/index.html` or `/tracker.html` to loop through entries (static list or small script). |
| Artifact | Introduce a live “Myth Map” timeline (maybe reusing `tracker.html`) showing art drops, funding milestones, and the “Bridge built” story arcs. | Update `js/app.js` to fetch `data/timeline.json` and paint simple cards; reuse header/footer. |

## Next steps

1. **Curate data** for patron tiers, myth chapters, and conduit artifacts (`data/` folder is ideal).  Collect sample prompts/responses to seed the gallery.
2. **Design block components** in the static HTML page(s) that highlight myth narrative + patron participation.  Use the existing CSS/partials to keep the layout cohesive.
3. **Plan a “Patronage Round” ideation cycle** where each new art drop comes with a civic prompt (e.g., “Describe a mythic bridge the silicons built for Civitasvox”), store results in `tracker` or `artists` and use them for future updates.

Let me know where you’d like to begin—should I prototype a Patronage Lab page, flesh out the `data/` seeds, or craft the initial Civic+Silicon pledge messaging? 
