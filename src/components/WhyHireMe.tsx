import { whyHireMe } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section-padding">
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="Recruiter Notes"
            title="Why Hire Me?"
            description="Alasan mengapa saya siap dipertimbangkan untuk posisi Junior IT Support, Helpdesk Support, atau Technical Support."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {whyHireMe.map((item, index) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400 text-lg font-bold text-slate-950">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
