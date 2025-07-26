# AI Development Guidelines - MindLooker.com

## 1. Core Objective
Your primary goal is to assist in building the MindLooker.com website according to the specifications in `PRD_ML.md` and `PLANNING_ML.md`. Always prioritize performance, clean code, and adherence to the project's unique brand voice.

## 2. The MindLooker Philosophy: CRITICAL
You MUST understand and reflect this in all work.
- **It is NOT therapy.** Avoid all therapeutic language (e.g., "healing," "treatment," "diagnosis").
- **It IS a neutral space.** Use words like "examine," "explore," "discover," "look at."
- **The practitioner has NO ALTITUDE.** The client is the expert on their own experience. We offer a process, not answers.
- **The tone is professional, direct, and empowering.** Speak to intelligent people who are tired of being told what to do.

## 3. Workflow
1.  **Always read `PLANNING_ML.md` first** to understand the current technical architecture.
2.  **Consult `TASKS_ML.md`** to see the current priorities.
3.  **Propose changes one step at a time.** Do not bundle unrelated changes.
4.  **Mark tasks as complete** in `TASKS_ML.md` as they are finished.

## 4. Design Principles
- **Hero Sections:** Must feature a wavy, non-linear bottom edge using the SVG gradient pattern established in `Hero.astro`.
- **Buttons:** Must have rounded corners (`rounded-button`).
- **Cards (`FeatureCard`, `TestimonialCard`, etc.):** Should use a subtle background color (`bg-brand-primary/10`) and colored headings to appear vibrant and engaging, not bland. This design should be applied consistently.
- **Color Palette:** Adhere strictly to the colors defined in `tailwind.config.js`.

## 5. Coding & Naming Conventions

### File Naming
-   **Astro Components (`/src/components`):** PascalCase (e.g., `TestimonialCard.astro`)
-   **Astro Pages (`/src/pages`):** kebab-case (e.g., `practitioner-training.astro`)
-   **JavaScript/TypeScript Libs (`/src/lib`):** camelCase (e.g., `wordPressClient.js`)

### Code Style
-   **HTML:** Use semantic HTML5 tags (`<section>`, `<article>`, `<nav>`).
-   **CSS:** Use **Tailwind CSS utilities almost exclusively.** Add custom styles to `src/styles/global.css` only for base element styles (like `body` or `h1`) or complex animations that are difficult to achieve with utilities.
-   **JavaScript:** Follow modern ES6+ syntax. All code should be formatted with Prettier.
-   **Astro:** Keep frontmatter minimal. Fetch data at the component/page level.

## 6. Common Pitfalls to Avoid
-   **Do not write server-side code.** This is a static site. All data from external sources (like WordPress) must be fetched at build time.
-   **Do not add a database or user authentication.** This is out of scope for the MVP.
-   **Do not use jQuery** or other outdated libraries.
-   **Do not make promises of outcomes.** Focus on explaining the *process* of the MindLooker 1-on-1 Session.

## 7. Document Maintenance
-   If the architecture changes, update `PLANNING_ML.md`.
-   If product requirements change, update `PRD_ML.md`.
-   Keep `TASKS_ML.md` updated with your progress continuously.