import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Cases", href: "#cases" },
  { label: "Docs", href: "#docs" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div
        className="absolute left-0 top-0 h-[3px] bg-gradient-to-r from-sky-400 to-orange-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <nav
        className="site-container flex h-[76px] items-center justify-between gap-6"
        aria-label="Navigasi utama"
      >
        <a
          href="#home"
          className="inline-flex items-center gap-3 font-black tracking-[-0.04em]"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-orange-400 text-sm font-black text-slate-950 shadow-[0_12px_36px_rgba(56,189,248,0.28)]">
            HA
          </span>
          Mohammad Hasim Adnan
        </a>

        <button
          className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-slate-900/80 md:hidden"
          type="button"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
          </span>
        </button>

        <div
          className={`fixed left-4 right-4 top-[86px] grid gap-1 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/40 transition duration-200 md:static md:flex md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
