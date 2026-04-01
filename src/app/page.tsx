import Image from "next/image";
import DemoWidget from "../components/DemoWidget";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-teal-400 text-slate-900 dark:text-slate-100 font-sans">
      <main className="mx-auto max-w-5xl px-6 py-20">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-white/20 flex items-center justify-center text-white font-bold">P</div>
            <span className="text-lg font-semibold">Pulse</span>
          </div>
          <nav aria-label="Main navigation" className="flex items-center gap-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#demo" className="hover:underline">Demo</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <button aria-label="Toggle dark mode" className="ml-4">🌓</button>
          </nav>
        </header>

        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-white">Pulse — Turn ideas into tiny apps</h1>
            <p className="mt-4 text-white/90">Ship small, iterate fast. Pulse helps developers turn ideas into tiny, deployable apps in minutes.</p>
            <div className="mt-6 flex gap-4">
              <Button variant="primary" size="md">Get Started</Button>
              <Button variant="secondary" size="md">View Docs</Button>
            </div>
            <div className="mt-8 text-white/80">
              <ul className="space-y-2">
                <li>• Scaffold tiny apps from templates</li>
                <li>• Live preview and instant deploy</li>
                <li>• Simple integrations and APIs</li>
              </ul>
            </div>
          </div>
          <div id="demo" className="bg-white/90 p-6 rounded-xl shadow-lg animate-fade">
            <DemoWidget />
          </div>
        </section>

        <section id="features" className="mt-16">
          <h2 className="text-2xl font-bold text-white">Features</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-white">Fast scaffolds</h3>
              <p className="mt-2 text-white/80">Start from curated tiny-app templates and customize.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-white">Live demo</h3>
              <p className="mt-2 text-white/80">Preview changes instantly with an interactive widget.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-white">Deploy with confidence</h3>
              <p className="mt-2 text-white/80">One-click deploy to your provider of choice.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 bg-white/5 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white">About</h2>
          <p className="mt-2 text-white/80">Pulse is a tiny developer tool for quickly turning ideas into small apps — perfect for prototypes, demos, and learning projects.</p>
        </section>

        <footer className="mt-12 text-white/80">
          <p>© {new Date().getFullYear()} Pulse — built with ❤️</p>
        </footer>
      </main>
    </div>
  );
}
