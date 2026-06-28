import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About" title="Profil Singkat" description="" />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white">
              Fokus pada support user dan penyelesaian masalah teknis.
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              Saya adalah calon Junior IT Support yang memiliki ketertarikan
              pada troubleshooting perangkat komputer, jaringan dasar, printer,
              software, dan support user. Saya terbiasa mempelajari masalah
              teknis secara bertahap, mulai dari identifikasi kendala,
              pengecekan perangkat, analisa koneksi, hingga dokumentasi hasil
              penyelesaian.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Fokus saya adalah membantu user agar perangkat kerja dapat
              digunakan kembali dengan cepat, rapi, dan terdokumentasi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-bold text-white">Career Target</h3>

            <div className="mt-5 space-y-4">
              {[
                "Junior IT Support",
                "Helpdesk Support",
                "Technical Support",
                "IT Staff",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
