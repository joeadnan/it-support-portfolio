import { certifications } from "../data/portfolio";
import type { CertificationStatus } from "../types/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const statusStyles: Record<CertificationStatus, string> = {
  Completed: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  "In Progress": "border-sky-400/30 bg-sky-400/10 text-sky-200",
  Planned: "border-orange-400/30 bg-orange-400/10 text-orange-200",
};

const statusLabel: Record<CertificationStatus, string> = {
  Completed: "Selesai",
  "In Progress": "Sedang Dipelajari",
  Planned: "Rencana",
};

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="site-container">
        <Reveal>
          <SectionTitle
            eyebrow="Certifications"
            title="Sertifikasi & Pembelajaran"
            description="Sertifikasi, pelatihan, dan pembelajaran yang mendukung kompetensi saya di bidang IT Support."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.06]">
                {item.imageUrl && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                        {item.category}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${
                          statusStyles[item.status]
                        }`}
                      >
                        {statusLabel[item.status]}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {!item.imageUrl && (
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                        {item.category}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${
                          statusStyles[item.status]
                        }`}
                      >
                        {statusLabel[item.status]}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold leading-snug text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-sky-200">
                    {item.issuer} • {item.year}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-400/20"
                    >
                      Lihat Credential
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
