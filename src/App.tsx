import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { DocumentationSamples } from "./components/DocumentationSamples";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Learning } from "./components/Learning";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Tools } from "./components/Tools";
import { WhyHireMe } from "./components/WhyHireMe";
import { Workflow } from "./components/Workflow";
import { useState } from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Experience />
      <DocumentationSamples />
      <WhyHireMe />
      <Workflow />
      <Projects />
      <Learning />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  // State untuk kontrol buka/tutup menu di mobile
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Tools", href: "#tools" },
    { label: "Experience", href: "#experience" },
    { label: "Documentation", href: "#documentation" },
    { label: "Workflow", href: "#workflow" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="text-sm font-black tracking-wide text-white">
          IT Support<span className="text-sky-400">.</span>
        </a>

        {/* Wrapper Menu & Tombol Navigasi */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Tombol Hamburger (Hanya muncul di mobile < md) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block text-slate-300 hover:text-white focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Icon Silang (X) saat menu terbuka
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon Garis Tiga (Hamburger) saat menu tertutup
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Daftar Menu (Responsif Mobile & Desktop) */}
          <div
            className={`
              ${isOpen ? "flex" : "hidden"} 
              absolute top-16 left-0 w-full flex-col gap-4 border-b border-white/10 bg-slate-950/95 p-6 backdrop-blur
              md:static md:flex md:w-auto md:flex-row md:gap-6 md:border-none md:bg-transparent md:p-0 md:backdrop-none
            `}
          >
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                onClick={() => setIsOpen(false)} // Menutup menu otomatis saat link diklik (mobile)
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {menu.label}
              </a>
            ))}
          </div>

          {/* Tombol Hire Me */}
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
// function Header() {
//   const menus = [
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Tools", href: "#tools" },
//     { label: "Experience", href: "#experience" },
//     { label: "Documentation", href: "#documentation" },
//     { label: "Workflow", href: "#workflow" },
//     { label: "Projects", href: "#projects" },
//     { label: "Certifications", href: "#certifications" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
//       <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
//         <a href="#home" className="text-sm font-black tracking-wide text-white">
//           IT Support<span className="text-sky-400">.</span>
//         </a>

//         <div className="hidden items-center gap-6 md:flex">
//           {menus.map((menu) => (
//             <a
//               key={menu.href}
//               href={menu.href}
//               className="text-sm font-medium text-slate-300 transition hover:text-white"
//             >
//               {menu.label}
//             </a>
//           ))}
//         </div>

//         <a
//           href="#contact"
//           className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
//         >
//           Hire Me
//         </a>
//       </nav>
//     </header>
//   );
// }

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Mohammad Hasim Adnan. IT Support Portfolio.
    </footer>
  );
}
