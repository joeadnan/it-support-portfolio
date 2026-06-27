import { timeline } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Workflow() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="site-container grid items-start gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
        <Reveal>
          <div>
            <SectionTitle
              eyebrow="Support Method"
              title="Cara troubleshooting"
              description=" "
            />
            <div className="glass-card rounded-[1.5rem] p-6">
              <strong className="text-white">Prinsip utama:</strong>
              <p className="mt-3 leading-7 text-slate-400">
                Pulihkan operasional user terlebih dahulu, lalu cari akar
                masalah, dokumentasikan solusi, dan buat pencegahan agar masalah
                tidak berulang.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative grid gap-4 before:absolute before:bottom-3 before:left-5 before:top-3 before:hidden before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:to-orange-400 before:opacity-50 md:before:block">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="relative grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md md:grid-cols-[94px_1fr] md:gap-6">
                <span className="inline-grid h-11 w-fit place-items-center rounded-full bg-gradient-to-r from-sky-400 to-orange-400 px-4 text-xs font-black text-slate-950 md:w-full">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-lg font-black tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
