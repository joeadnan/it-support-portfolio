import { projects } from "../data/portfolio";
import type { ProjectAccent } from "../types/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const accentMap: Record<
  ProjectAccent,
  { blob: string; pill: string; check: string }
> = {
  blue: {
    blob: "bg-sky-400",
    pill: "border-sky-400/25 bg-sky-400/10 text-sky-100",
    check: "text-sky-300",
  },
  emerald: {
    blob: "bg-emerald-400",
    pill: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100",
    check: "text-emerald-300",
  },
  orange: {
    blob: "bg-orange-400",
    pill: "border-orange-400/25 bg-orange-400/10 text-orange-100",
    check: "text-orange-300",
  },
  violet: {
    blob: "bg-violet-400",
    pill: "border-violet-400/25 bg-violet-400/10 text-violet-100",
    check: "text-violet-300",
  },
  cyan: {
    blob: "bg-cyan-400",
    pill: "border-cyan-400/25 bg-cyan-400/10 text-cyan-100",
    check: "text-cyan-300",
  },
  rose: {
    blob: "bg-rose-400",
    pill: "border-rose-400/25 bg-rose-400/10 text-rose-100",
    check: "text-rose-300",
  },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad bg-gradient-to-b from-transparent via-slate-900/35 to-transparent"
    >
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="Portfolio Projects"
            title="Project "
            description=""
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const accent = accentMap[project.accent];

            return (
              <Reveal key={project.title} delay={index * 70}>
                <article className="hover-lift group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-md">
                  <div
                    className={`pointer-events-none absolute -bottom-20 -right-14 size-44 rounded-full ${accent.blob} opacity-15 blur-xl transition group-hover:opacity-25`}
                  />

                  <div className="relative flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex w-fit rounded-full border px-3 py-2 text-xs font-black ${accent.pill}`}
                    >
                      {project.category}
                    </span>
                    <div className="text-4xl font-black tracking-[-0.08em] text-white/10">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="relative mt-5 text-xl font-black tracking-[-0.04em] text-white">
                    {project.title}
                  </h3>
                  <p className="relative mt-4 leading-7 text-slate-400">
                    {project.summary}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <ul className="relative mt-6 grid gap-3">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="grid grid-cols-[18px_1fr] gap-2 text-sm leading-6 text-slate-400"
                      >
                        <span className={`font-black ${accent.check}`}>✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
