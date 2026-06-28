import { projects } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Case Studies"
          title="Project & Studi Kasus "
          description=""
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    <strong className="text-slate-200">Masalah:</strong>{" "}
                    {project.problem}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <h4 className="font-bold text-white">Langkah Analisa</h4>

                  <ul className="mt-4 space-y-3">
                    {project.steps.map((step) => (
                      <li key={step} className="flex gap-3 text-slate-300">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-400" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
