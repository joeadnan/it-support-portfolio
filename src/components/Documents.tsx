import { documents } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Documents() {
  return (
    <section
      id="docs"
      className="section-pad bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.10),transparent_42rem)]"
    >
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="Documentation"
            title="Dokumen pendukung "
            description=""
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((document) => (
            <article
              key={document.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  {document.category}
                </span>

                <span className="text-2xl">📄</span>
              </div>

              <h3 className="text-xl font-bold text-white">{document.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {document.description}
              </p>

              <a
                href={document.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
              >
                Lihat Dokumen
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
