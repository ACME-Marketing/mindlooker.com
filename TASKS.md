# High-Level Tasks - MindLooker.com MVP

## Task Status Key
- [ ] To Do
- [-] In Progress
- [x] Done

---

## Milestone 1: Project Foundation & Setup (Week 1)
- [ ] Initialize Astro project in new GitHub repository
- [ ] Configure `astro.config.mjs` and `tailwind.config.js`
- [ ] Set up project structure as defined in `PLANNING_ML.md`
- [ ] Create `.env.example` with all required variables
- [ ] Deploy initial "Hello World" project to Render.com to validate CI/CD pipeline
- [ ] Create `BaseLayout.astro` with header, footer, and SEO component placeholders

## Milestone 2: Core Pages & Content (Week 1-2)
- [ ] Build responsive Header and Footer components
- [ ] Build Homepage (`/`) with sections for value props, testimonials, and CTAs for both clients and trainees
- [ ] Build About Page (`/about`) with founder story and philosophy
- [ ] Build Sessions Page (`/sessions`) detailing the 1-on-1 session, including "what to expect"
- [ ] Build Legal Pages (`/legal/...`) with placeholder content for Privacy, Terms, and Disclaimer

## Milestone 3: Blog Integration (Week 2)
- [ ] Implement GraphQL client in `/src/lib/wordpress.js`
- [ ] Create Blog Index Page (`/blog`) that lists all posts from WordPress
- [ ] Create Dynamic Blog Post Page (`/blog/[...slug]`)
- [ ] Create `PostLayout.astro` for consistent blog post styling
- [ ] Style blog pages to match the site's aesthetic

## Milestone 4: Practitioner Training Track (Week 3)
- [ ] Build Training Landing Page (`/training`) with content targeting the "Maureen" persona
- [ ] Create application form component
- [ ] Build Training Application Page (`/training/apply`) using the form component
- [ ] Set up n8n webhook to receive and process application form submissions
- [ ] Test the application form submission flow end-to-end

## Milestone 5: Integrations & Finalization (Week 4)
- [ ] Integrate Cal.com embed for free trial booking on the Sessions and Home pages
- [ ] Write final copy for all pages, ensuring brand voice is consistent
- [ ] Source and optimize all images
- [ ] Implement SEO best practices: sitemap, `robots.txt`, meta tags, and structured data
- [ ] Conduct full site review for mobile responsiveness and cross-browser compatibility

## Milestone 6: Launch & Post-Launch
- [ ] Final legal review of all page content, especially disclaimers
- [ ] Final end-to-end test of all user journeys (client and trainee)
- [ ] Go Live: Point `mindlooker.com` domain to Render service
- [ ] Set up analytics and monitoring (Google Analytics, Search Console)
- [ ] Begin planning Phase 2 features (e.g., advanced blog filtering, paid session booking flow)