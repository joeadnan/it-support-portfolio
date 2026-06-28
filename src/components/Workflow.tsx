import { workflow } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Workflow() {
  return (
    <section id="workflow" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Workflow"
          title="Cara Saya Menangani Masalah IT"
          description=""
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="text-4xl font-black text-sky-400/40">
                {item.step}
              </span>

              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
