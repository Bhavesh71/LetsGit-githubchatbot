import Link from "next/link";
import {
  GitBranch,
  Sparkles,
  MessageSquare,
  GitCommit,
  ShieldCheck,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="relative border-b border-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/25">
              <GitBranch className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Lets Git</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-lg shadow-brand-600/25"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 border border-brand-500/30 bg-brand-500/10 rounded-full px-4 py-1.5 text-sm text-brand-300 mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Powered by Google Gemini AI · Completely Free
        </div>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Chat with your{" "}
          <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
            GitHub Repos
          </span>
        </h1>

        <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Lets Git indexes your repositories and answers your questions about
          the codebase using AI. Understand any project instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-xl shadow-brand-600/30"
          >
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 text-white font-medium px-8 py-3.5 rounded-xl transition-colors"
          >
            See how it works
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 mt-14 text-sm text-white/40">
          {["Free forever", "No credit card needed", "Any public GitHub repo"].map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-brand-400" />
              {s}
            </div>
          ))}
        </div>
      </main>

      {/* Features */}
      <section id="features" className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-3">
          Everything you need to understand any codebase
        </h2>
        <p className="text-white/40 text-center mb-12">
          Lets Git does the heavy lifting so you can focus on building.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon:  <MessageSquare className="w-5 h-5 text-brand-400" />,
              color: "from-brand-500/10 to-brand-600/5 border-brand-500/20",
              title: "AI-Powered Q&A",
              desc:  "Ask anything about your codebase. Get answers with exact file references and code snippets.",
            },
            {
              icon:  <GitCommit className="w-5 h-5 text-purple-400" />,
              color: "from-purple-500/10 to-purple-600/5 border-purple-500/20",
              title: "Smart Commit Summaries",
              desc:  "Every commit is automatically summarized into plain English. No more decoding cryptic messages.",
            },
            {
              icon:  <ShieldCheck className="w-5 h-5 text-emerald-400" />,
              color: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20",
              title: "Secure Indexing",
              desc:  "Source files are summarized to generate AI context. Your data stays in your own database.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`bg-gradient-to-br ${f.color} border rounded-2xl p-6`}
            >
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Up and running in 3 steps
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Connect a repo",       desc: "Paste any GitHub repository URL to get started." },
            { step: "2", title: "We index the code",    desc: "Lets Git reads your files and builds an AI-searchable index." },
            { step: "3", title: "Ask your questions",   desc: "Chat with your codebase and get accurate, file-referenced answers." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 bg-brand-600/20 border border-brand-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-400 font-bold text-lg">
                {s.step}
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-white/40 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-xl shadow-brand-600/30"
          >
            <Zap className="w-4 h-4" />
            Get started for free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-600 rounded-md flex items-center justify-center">
              <GitBranch className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm">Lets Git</span>
          </div>
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Lets Git. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
