# High-Level Tasks - MindLooker.com MVP

## Task Status Key
- [ ] To Do
- [-] In Progress
- [x] Done

---

## Milestone 1: Project Foundation & Setup (Week 1)
- [x] Initialize Astro project in new GitHub repository
- [x] Configure `astro.config.mjs` and `tailwind.config.js`
- [x] Set up project structure as defined in `PLANNING.md`
- [x] Create `.env.example` with all required variables
- [x] Deploy initial "Hello World" project to Render.com to validate CI/CD pipeline
- [x] Create `BaseLayout.astro` with header, footer, and SEO component placeholders

## Milestone 2: Core Pages & Content (Week 1-2)
- [x] Build responsive Header and Footer components
- [x] Build Homepage (`/`) with sections for value props, testimonials, and CTAs for both clients and trainees
- [x] Build About Page (`/about`) with founder story and philosophy
- [x] Build Sessions Page (`/sessions`) detailing the 1-on-1 session, including "what to expect"
- [x] Build Practitioner Training Page (`/training`)
- [x] Build Legal Pages (`/legal/...`) with placeholder content for Privacy, Terms, and Disclaimer

## Milestone 3: Blog Integration (Week 2) - COMPLETE
- [x] Implement GraphQL client in `/src/lib/wordpress.js`
- [x] Create Blog Index Page (`/blog`) that lists all posts from WordPress
- [x] Create Dynamic Blog Post Page (`/blog/[...slug]`)
- [x] Create `PostLayout.astro` for consistent blog post styling
- [x] Style blog pages to match the site's aesthetic

## Milestone 4: Practitioner Training Track (Week 3) - COMPLETE
- [x] Build Training Landing Page (`/training`) with content targeting the "Maureen" persona
- [x] Create application form component
- [x] Build Training Application Page (`/training/apply`) using the form component
- [x] Set up n8n webhook to receive and process application form submissions
- [x] Test the application form submission flow end-to-end

## Milestone 5: Integrations & Finalization (Week 4) - COMPLETE
- [x] Integrate Cal.com embed for free trial booking on the Sessions and Home pages
- [x] Write final copy for all pages, ensuring brand voice is consistent
- [x] Source and optimize all images
- [x] Implement SEO best practices: sitemap, `robots.txt`, meta tags, and structured data
- [x] Conduct full site review for mobile responsiveness and cross-browser compatibility

## Milestone 6: Launch & Post-Launch - COMPLETE
- [x] Final legal review of all page content, especially disclaimers
- [x] Final end-to-end test of all user journeys (client and trainee)
- [x] Go Live: Point `mindlooker.com` domain to Render service
- [x] Set up analytics and monitoring (Google Analytics, Search Console)
- [x] Begin planning Phase 2 features (e.g., advanced blog filtering, paid session booking flow)