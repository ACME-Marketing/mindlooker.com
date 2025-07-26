# Product Requirements Document - MindLooker.com

## 1. Vision & Value Proposition

**Vision:** To establish MindLooker.com as the premier online destination for individuals seeking a profound, self-directed alternative to traditional therapy, and to build a training hub for practitioners who want to learn and deliver the revolutionary MindLooker 1-on-1 Session.

**Value Proposition:**
- **For Clients:** "See yourself clearly and create lasting change, without judgment or advice. The MindLooker 1-on-1 Session is a confidential space where you find your own answers."
- **For Practitioners (Trainees):** "Learn a powerful, non-directive methodology that delivers rapid results for clients. Break free from the limitations of traditional models and offer a truly transformative service."

## 2. User Personas

### Primary Client Personas
1.  **Sarah (The Frustrated Seeker):** Has tried multiple therapies with little success. Feels stuck and is exhausted from "coping." She seeks genuine transformation, not another set of tools.
2.  **Marcus (The High-Performer):** Successful but self-sabotaging. He is impatient with traditional therapy's slow pace and psychobabble. He wants a direct, efficient path to understanding and changing his behavior.
3.  **Jamie (The Therapy Skeptic):** Distrusts the therapy model but knows they need help. They are looking for a logical, transparent process that respects their autonomy.

### Primary Trainee Persona
4.  **Maureen (The Disillusioned Professional):** A trained therapist, counselor, or coach who feels that traditional methods are falling short. She is seeking a more effective, non-prescriptive approach that empowers clients more directly and may be feeling conflicted about her years of training in less-effective models.

## 3. Key Features & User Journeys

### A. The Client Journey
**Goal:** Convert a curious visitor into a paying client.
1.  **Discovery:** User finds MindLooker.com via search ("therapy alternative") or content.
2.  **Evaluation:** User explores the `/sessions` and `/about` pages to understand the unique, non-directive process.
3.  **Trial:** User books a free 30-minute introductory session via an embedded Cal.com link.
4.  **Conversion:** After a powerful trial session, the user books a block of paid 1-on-1 sessions.

### B. The Practitioner Training Journey
**Goal:** Convert a disillusioned professional into a program applicant.
1.  **Discovery:** Maureen discovers MindLooker through content addressing the failures of traditional therapy.
2.  **Evaluation:** She navigates to the `/training` section. The content resonates with her professional frustrations and offers a compelling alternative. She learns about the curriculum, the philosophy, and the benefits.
3.  **Consideration:** She may book a 1-on-1 session for herself to experience the process firsthand.
4.  **Conversion:** She fills out the application form on the `/training/apply` page to begin the enrollment process.

## 4. MVP Functional Requirements

### Core Website
- **Homepage:** Clear, compelling value proposition for both client types and clear navigation to both `/sessions` and `/training`.
- **About Page (`/about`):** Tell the story of MindLooker, the founder's background, and the core philosophy.
- **Sessions Page (`/sessions`):** Detail the MindLooker 1-on-1 Session. Explain what it is, what it isn't, and what to expect. Include testimonials and a clear CTA to book a free trial.
- **Blog (`/blog`):** A content hub with articles filterable by category (e.g., "For You," "For Professionals").
- **Legal Pages (`/legal/...`):** Standard Privacy, Terms, and a very strong Disclaimer page reinforcing that this is not medical advice.

### Practitioner Training Section
- **Training Landing Page (`/training`):** A sales page targeted at the "Maureen" persona. It will detail the program's value, curriculum, and the MindLooker philosophy. Include testimonials from past trainees if available.
- **Application Page (`/training/apply`):** A form to capture applications. This form will submit to an n8n webhook for processing.

### Integrations
- **Cal.com:** Embedded booking for free trials and paid sessions.
- **WordPress:** Headless CMS for the blog, queried via GraphQL.
- **n8n:** To handle application form submissions from the training page.

## 5. What's NOT in MVP
- No client or trainee login portals.
- No direct payment processing on the site (handled via Cal.com or post-application invoicing).
- No community forum.
- No multi-language support.

## 6. Success Metrics
- **Primary KPI (Clients):** Visitor-to-Free-Trial Conversion Rate (Target: 5%).
- **Primary KPI (Training):** Visitor-to-Application Conversion Rate (Target: 2%).
- **Secondary KPI:** 40% of free trials convert to a paid session block.
- **Content Engagement:** Average time on page for blog posts > 2 minutes.