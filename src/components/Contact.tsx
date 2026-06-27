import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad pt-16">
      <div className="site-container">
        <Reveal>
          <div className="glass-card relative grid overflow-hidden rounded-[2rem] p-7 md:p-12 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-10">
            <div className="pointer-events-none absolute -right-36 -top-36 size-80 rounded-full bg-orange-400/20 blur-2xl" />

            <div className="relative">
              <span className="eyebrow">Contact</span>
              <h2 className="section-heading">Siap untuk posisi IT Support</h2>
              {/* <p className="section-description">
                Gunakan template ini untuk website portfolio pribadi, lampiran
                LinkedIn, atau bahan presentasi saat interview user.
              </p> */}
            </div>

            <div className="relative mt-8 grid gap-3 lg:mt-0">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-slate-300 transition hover:translate-x-1 hover:border-sky-400/40 hover:text-white"
              >
                ✉️ {profile.email}
              </a>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-slate-300 transition hover:translate-x-1 hover:border-sky-400/40 hover:text-white"
              >
                🔗 {profile.linkedin}
              </a>
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-slate-300 transition hover:translate-x-1 hover:border-sky-400/40 hover:text-white"
              >
                💻 {profile.github}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
