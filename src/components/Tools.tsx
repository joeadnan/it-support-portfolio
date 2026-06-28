import { tools } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Tools() {
  return (
    <section id="tools" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Tools"
          title="Tools yang Digunakan"
          description=""
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-lg font-bold text-white">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
