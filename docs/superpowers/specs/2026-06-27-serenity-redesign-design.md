# Design Spec: Serenity Page Redesign

## Objective
Redesign the "Cyber Serenity" page (`src/services/serenity.njk`) using the "Reassuring Guide" split-layout established by the Helpline page. The goal is to make the dense, text-heavy content scannable, engaging, and visually aligned with the elite aesthetic of the site.

## Layout & Architecture
1. **Split-Screen Grid (`lg:grid-cols-12`)**:
   - The layout will mirror the flipped Helpline layout: the content will sit on the left (`lg:col-span-8 order-last lg:order-first`), and the sticky contact panel will sit on the right (`lg:col-span-4 order-first lg:order-last`).
2. **Sticky Contact Panel (Right Sidebar)**:
   - Contains emergency support actions (WhatsApp and Call).
   - Styled with a dark background (`#3b1f0e`) and white text to maintain visual consistency.
3. **Content Column (Left Side)**:
   - **Narrative Intro**: The "Understanding Cyber Rehabilitation" and general intro paragraphs will remain as elegant prose using `Georgia` headings.
   - **Pillars Grid**: The core pillars (Psychological Counseling, Educational Workshops, Vocational Training, Community Support, Measuring Success) will be converted into a 2-column card grid, similar to the "What We Can Help With" section on the Helpline page. Each card will use an appropriate SVG icon.
   - **Conclusion**: The "Join Avanzo in Transforming Lives" section will sit below the grid as a concluding narrative block.

## Design Decisions
- **Consistency**: Using the exact same DOM structure and Tailwind utility patterns as `helpline.njk` to ensure a cohesive frontend experience.
- **Scannability**: Converting headers into cards reduces the cognitive load of reading 8 consecutive paragraphs.
- **Responsive**: The flex ordering ensures the Contact Panel stays on top on mobile, but moves to the right on desktop.

## Next Steps
- Review this spec.
- Generate the Implementation Plan.
- Execute the template rewrite.
