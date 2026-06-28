import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Learning } from "./components/Learning";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Tools } from "./components/Tools";
import { Workflow } from "./components/Workflow";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Workflow />
      <Projects />
      <Tools />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  const menus = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Workflow", href: "#workflow" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="text-sm font-black tracking-wide text-white">
          IT Support<span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {menu.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Mohammad Hasim Adnan. IT Support Portfolio.
    </footer>
  );
}
