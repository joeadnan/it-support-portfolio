import { experiences } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="Work Experience"
            title="Professional IT Support Experience"
            description="Pengalaman kerja dalam menangani troubleshooting, support user, jaringan dasar, printer, software, dan operasional IT harian."
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <Reveal key={`${experience.role}-${experience.company}`}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur md:p-8">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl transition group-hover:bg-sky-400/20" />

                <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="mb-5 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200">
                      {experience.employmentType}
                    </div>

                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-sky-200">
                      {experience.company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {experience.period}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {experience.location}
                      </span>
                    </div>

                    <p className="mt-6 leading-7 text-slate-300">
                      {experience.summary}
                    </p>
                    <div>
                      {experience.imageUrl && (
                        <img
                          src={experience.imageUrl}
                          alt={experience.company}
                          className="mt-4 rounded-lg shadow-lg"
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                        Responsibilities
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {experience.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-6 text-slate-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Key Achievements
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {experience.achievements.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-6 text-slate-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                        Tools & Platforms
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
