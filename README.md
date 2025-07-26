# MindLooker.com Website

This repository contains the source code for MindLooker.com, a high-performance static website built with Astro.

The primary purpose of this site is to attract and convert two key audiences:
1.  **Clients** seeking a powerful, non-directive alternative to traditional therapy.
2.  **Practitioners** looking to train in the MindLooker 1-on-1 Session methodology.

## 🚀 Key Documentation

For a complete understanding of the project, please review the planning documents:

- **[PRD_ML.md](./PRD_ML.md):** What we're building and for whom.
- **[PLANNING_ML.md](./PLANNING_ML.md):** How we're building it (technical architecture).
- **[TASKS_ML.md](./TASKS_ML.md):** The step-by-step project plan.
- **[CLAUDE_ML.md](./CLAUDE_ML.md):** Guidelines for AI-assisted development.

## 🛠 Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **CMS (Blog):** Headless WordPress (via GraphQL)
- **Deployment:** Render.com
- **Scheduling:** Cal.com
- **Automation:** n8n

## 🏃‍♀️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [repo-url]
    cd mindlooker.com
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Copy the `.env.example` file to `.env` and fill in the required values from your service providers.
    ```bash
    cp .env.example .env
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Your site will be available at `http://localhost:4321`.

## 🚢 Deployment

The site is automatically deployed to Render.com from the `main` branch. All pull requests must be reviewed and approved before merging.