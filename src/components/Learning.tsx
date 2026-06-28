import { learning } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Learning() {
  return (
    <section id="learning" className="bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Learning"
          title="Pembelajaran & Hands-on Lab"
          description=""
        />

        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {learning.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-300"
              >
                <span className="mr-3 text-sky-400">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
