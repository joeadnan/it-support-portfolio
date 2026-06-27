import { skills } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="Core Competency"
            title="Skill IT Support "
            description=""
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 80}>
              <article className="hover-lift h-full rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
                <div className="grid gap-5 sm:grid-cols-[54px_1fr]">
                  <div className="grid size-14 place-items-center rounded-2xl bg-sky-400/10 text-2xl">
                    {skill.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-lg font-black tracking-[-0.03em] text-white">
                        {skill.title}
                      </h3>
                      <span className="rounded-full bg-sky-400/10 px-2.5 py-1.5 text-xs font-black text-sky-100">
                        {skill.level}
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-slate-400">
                      {skill.description}
                    </p>
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
