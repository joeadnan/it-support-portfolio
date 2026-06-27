export function Footer() {
  return (
    <footer className="border-t border-white/10 py-7 text-slate-400">
      <div className="site-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} IT Support Portfolio. Built with React + TypeScript + Tailwind CSS.</p>
        <a href="#home" className="font-black text-white transition hover:text-sky-300">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
