## 🤖 LetsGit – GitHub Repository ChatBot

> “Talk to your repository like it’s your teammate.”

LetsGit is an AI-powered chatbot that lets you chat with your GitHub repository to understand its structure, summarize its commits, and answer questions about your code. Built using Next.js, tRPC, and OpenAI, it's your intelligent companion for navigating any codebase.

---

## 🚀 Features

### 🧠 GitHub Repository ChatBot (powered by Gemini AI)
- 💬 Ask questions about your code
- 🧠 Summarize commits, PRs, and file structure
- 🧭 Navigate repositories conversationally
- 🗂️ Understand project architecture instantly
- 🔐 Secure login with Clerk Auth
- 🌟 Powered by OpenAI, AssemblyAI, and LangChain

### 🎙️ Meeting Audio Summarizer (Cloudinary + AssemblyAI)
- Upload meeting recordings via **Cloudinary**
- Get accurate, structured meeting summaries using **AssemblyAI**
- Convert hours of audio into minutes of highlights
- Ideal for team syncs, client meetings, and lectures

---

### 🧰 Tech Stack

| Frontend       | Backend           | AI & Tools         | Database   |
|----------------|-------------------|--------------------|------------|
| Next.js        | tRPC + TypeScript | GeminiAI           | Neon       |
| Tailwind CSS   | Node.js           | AssemblyAI         | Prisma ORM |
| Clerk Auth     | LangChain         | GitHub REST API    |            |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Bhavesh71/LetsGit-githubchatbot.git
cd LetsGit-githubchatbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your-openai-key
GEMINI_API_KEY=your-geminiai-key
GITHUB_TOKEN=your-github-token
ASSEMBLYAI_API_KEY=your-assemblyai-key
DATABASE_URL=your-neon-db-url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-pk
CLERK_SECRET_KEY=your-clerk-sk
```

> 💡 You can get these from [OpenAI](https://platform.openai.com/), [AssemblyAI](https://www.assemblyai.com/), [Clerk](https://clerk.dev/), and [Neon](https://neon.tech/)

### 4. Run the Dev Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
LetsGit-githubchatbot/
├── app/                  # Main Next.js app files
│   └── (protected)/      # Routes with auth
├── lib/                  # Utility functions (GeminiAI, AssemblyAI, etc.)
├── db/                   # Prisma schema & DB setup
├── public/               # Static files & assets
├── .env.local            # Environment variables
├── .gitignore            # Ignored files
└── README.md             # You're here!
```

---

## 🧠 How It Works

1. **Ingest Repo Data**: Uses GitHub API to fetch commits, files, and structure.
2. **Process & Embed**: Converts content into embeddings using LangChain + GeminiAI.
3. **Chat & Summarize**: Lets you interact using natural language.

---

## ✨ Future Plans

- 🔁 Multi-repo chat support
- 📊 Visual Git history viewer
- 📜 Auto-generate README and Docs

---

## 🛡️ Security & Privacy

- ✅ OAuth via Clerk
- ✅ API keys stored securely via `.env`
- ❌ No data is stored without permission
- 🔐 Backend is serverless and secure

---

## 🙌 Contributing

We welcome all contributions!

```bash
# Fork the repo
git clone https://github.com/your-username/LetsGit-githubchatbot.git

# Create a feature branch
git checkout -b feature-name

# Commit your changes
git commit -m "Add: your feature"

# Push and create a PR
git push origin feature-name
```

---

## Contributors

<p align="left">
  <a href="https://github.com/Bhavesh71">
    <img src="https://avatars.githubusercontent.com/Bhavesh71" width="80" height="80" style="border-radius: 50%;" alt="Bhavesh71"/>
  </a>
  <a href="https://github.com/Sharannarahs">
    <img src="https://avatars.githubusercontent.com/Sharannarahs" width="80" height="80" style="border-radius: 50%;" alt="Sharannarahs"/>
  </a>
  <a href="https://github.com/Mukil007">
    <img src="https://avatars.githubusercontent.com/Mukil007" width="80" height="80" style="border-radius: 50%;" alt="Mukil007"/>
  </a>
  <a href="https://github.com/sriram0804">
    <img src="https://avatars.githubusercontent.com/sriram0804" width="80" height="80" style="border-radius: 50%;" alt="sriram0804"/>
  </a>
</p>

---

## 📄 License

MIT License © [Bhavesh L](https://github.com/Bhavesh71)

---

## 💡 Acknowledgements

- [OpenAI](https://openai.com/)
- [AssemblyAI](https://www.assemblyai.com/)
- [LangChain](https://www.langchain.com/)
- [Clerk Auth](https://clerk.dev/)
- [Neon Database](https://neon.tech/)

---

## 🧑‍💻 Created with 💚 by Bhavesh L

Let’s Git Talking!
'''
