import { documentationSamples } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function DocumentationSamples() {
  return (
    <section id="documentation" className="section-padding">
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="IT Documentation"
            title="Documentation Samples"
            description="Contoh dokumen pendukung pekerjaan IT Support seperti checklist, SOP, form aset, dan panduan troubleshooting."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {documentationSamples.map((document) => (
            <Reveal key={document.title}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-sky-400/40">
                <div className="mb-4 flex flex-wrap gap-2">
                  {document.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {document.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {document.description}
                </p>

                <a
                  href={document.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  View Document
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
