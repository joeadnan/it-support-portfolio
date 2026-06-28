import { skills } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Core Skills"
          title="Kemampuan Utama "
          description=""
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:border-sky-400/40"
            >
              <h3 className="text-lg font-bold text-white">{skill.title}</h3>

              <ul className="mt-5 space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
