# 🚀 Lets Git — Chat with your GitHub Repositories

An AI-powered tool that indexes your GitHub repositories so you can ask natural language questions about your codebase using **Google Gemini 1.5 Flash**.

---

## ✨ Features

- **AI Q&A** — Ask any question about a repo, get answers with exact file references
- **Commit Summaries** — Every commit automatically summarized in plain English
- **Repo Indexing** — Source files summarized and stored for context-aware answers
- **Clerk Auth** — Email + social login, free up to 10k MAU

---

## 🛠 Tech Stack (All Free Tier)

| Tool | Purpose | Free Tier |
|---|---|---|
| **Next.js 15** | Framework (App Router + Server Actions) | Always free |
| **Prisma 6** | ORM | Always free |
| **Neon** | PostgreSQL database | 0.5 GB storage |
| **Clerk** | Authentication | 10,000 MAU |
| **Google Gemini** | AI (1.5 Flash) | 15 req/min, 1M tokens/day |
| **Octokit** | GitHub API | 5,000 req/hr with token |

---

## 📁 Project Structure

```
letsgit/
├── prisma/
│   └── schema.prisma              # DB schema
├── src/
│   ├── actions/
│   │   └── project.actions.ts     # Server Actions: CRUD, indexing, Q&A, commits
│   ├── app/
│   │   ├── (auth)/                # Sign-in / Sign-up (Clerk)
│   │   ├── (dashboard)/           # Protected app routes
│   │   │   ├── dashboard/         # Home with project cards
│   │   │   └── projects/          # List + create + detail (Q&A / Commits / Files)
│   │   ├── api/webhooks/clerk/    # Clerk user sync webhook
│   │   ├── sync-user/             # Post-signup DB sync
│   │   ├── layout.tsx
│   │   └── page.tsx               # Landing page
│   ├── components/
│   │   ├── app-sidebar.tsx
│   │   ├── app-header.tsx
│   │   ├── create-project-form.tsx
│   │   ├── projects-list.tsx
│   │   └── project-view.tsx       # Tabs: Q&A, Commits, Files
│   ├── lib/
│   │   ├── db.ts                  # Prisma singleton
│   │   ├── auth.ts                # getCurrentUser() helper
│   │   ├── github.ts              # Octokit wrappers
│   │   ├── gemini.ts              # Gemini AI wrappers
│   │   └── utils.ts               # cn(), timeAgo(), etc.
│   └── middleware.ts              # Clerk route protection
├── .env.example
├── next.config.ts
└── tailwind.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+**
- Accounts at: [neon.tech](https://neon.tech), [clerk.com](https://clerk.com), [aistudio.google.com](https://aistudio.google.com), [github.com](https://github.com)

---

### Step 1 — Install

```bash
cd letsgit
npm install
```

---

### Step 2 — Environment Variables

```bash
cp .env.example .env
```

Fill in `.env`:

#### 🗄️ Neon (PostgreSQL)
1. [neon.tech](https://neon.tech) → Create Account → New Project
2. Copy **Pooled connection string** → `DATABASE_URL`
3. Copy **Direct connection string** → `DATABASE_DIRECT_URL`

#### 🔐 Clerk Auth
1. [clerk.com](https://clerk.com) → Create Application
2. Copy **Publishable Key** → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
3. Copy **Secret Key** → `CLERK_SECRET_KEY`
4. Webhook setup in Step 5 below

#### 🤖 Google Gemini
1. [aistudio.google.com/apikey](https://aistudio.google.com/apikey) → Create API key
2. Copy key → `GEMINI_API_KEY`

#### 🐙 GitHub Token
1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens**
2. Permissions: **Contents → Read-only**, **Metadata → Read-only**
3. Copy token → `GITHUB_TOKEN`

---

### Step 3 — Push Database Schema

```bash
npm run db:push
```

Verify with `npm run db:studio` (opens Prisma Studio at localhost:5555).

---

### Step 4 — Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) → sign up → you'll be routed through `/sync-user` to create your DB record.

---

### Step 5 — Clerk Webhook (for production)

1. [Clerk Dashboard](https://dashboard.clerk.com) → Webhooks → Add Endpoint
2. URL: `https://your-domain.com/api/webhooks/clerk`
3. Events: `user.created`, `user.updated`, `user.deleted`
4. Copy **Signing Secret** → `CLERK_WEBHOOK_SECRET`

**Testing locally with ngrok:**
```bash
ngrok http 3000
# Use the https ngrok URL as your webhook endpoint
```

---

## 🌐 Deploy to Vercel (Free)

```bash
npm i -g vercel && vercel
```

1. Add all `.env` values in the Vercel dashboard → Environment Variables
2. Update `NEXT_PUBLIC_APP_URL` to your Vercel URL
3. Update Clerk webhook URL to your Vercel domain
4. `vercel --prod`

---

## 📊 Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run db:push      # Push schema changes
npm run db:studio    # Visual DB browser
npm run db:generate  # Regenerate Prisma client
```

---

## 💡 How It Works

1. **Sign up** via Clerk → `/sync-user` creates your DB record
2. **Add a repo** → GitHub API fetches metadata
3. **Indexing runs** in the background:
   - Files fetched from GitHub
   - Each file summarized by Gemini Flash
   - Stored in `SourceFile` table
4. **Ask a question**:
   - Gemini ranks the most relevant files
   - Top 5 files sent as context to Gemini
   - Markdown answer returned with file references

---

## 🐛 Common Issues

| Problem | Fix |
|---|---|
| `prisma generate` error after install | Run `npm run db:generate` |
| 404 on GitHub repo | Make sure it's public or your token has access |
| Q&A says "not indexed" | Click "Re-index" on the project page |
| Webhook not working locally | Use [ngrok](https://ngrok.com) |
| Gemini 429 rate limit | Free tier is 15 req/min — wait a moment and retry |
