import { caseStudies } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function CaseStudies() {
  return (
    <section id="cases" className="section-pad">
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="Troubleshooting Case"
            title="Studi kasus & problem solving"
            description=" "
            align="center"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="hover-lift h-full rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
                <div className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-2 text-xs font-black text-sky-100">
                  Case 0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-white">
                  {item.title}
                </h3>

                <div className="mt-5">
                  <span className="eyebrow">Masalah</span>
                  <p className="mt-2 leading-7 text-slate-400">
                    {item.problem}
                  </p>
                </div>

                <div className="mt-5">
                  <span className="eyebrow">Analisa</span>
                  <ul className="mt-3 grid gap-2.5">
                    {item.analysis.map((point) => (
                      <li
                        key={point}
                        className="grid grid-cols-[18px_1fr] gap-2 text-sm leading-6 text-slate-400"
                      >
                        <span className="font-black text-emerald-300">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <span className="eyebrow">Solusi</span>
                  <p className="mt-2 leading-7 text-slate-400">
                    {item.solution}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 leading-7 text-emerald-100">
                  <strong>Impact:</strong> {item.impact}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
