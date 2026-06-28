import { profile } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Hire Me"
          description="Saya terbuka untuk posisi Junior IT Support, Helpdesk, Technical Support, atau IT Staff."
        />

        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="space-y-4">
            <ContactItem
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactItem
              label="WhatsApp"
              value={profile.phone}
              href={profile.whatsapp}
            />
            <ContactItem
              label="LinkedIn"
              value="LinkedIn Profile"
              href={profile.linkedin}
            />
            <ContactItem
              label="GitHub"
              value="GitHub Profile"
              href={profile.github}
            />
            <ContactItem label="Lokasi" value={profile.location} />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.cv}
              download
              className="rounded-xl bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
            >
              Download CV
            </a>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactItemProps = {
  label: string;
  value: string;
  href?: string;
};

function ContactItem({ label, value, href }: ContactItemProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-slate-400">{label}</span>

      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="font-semibold text-sky-300 hover:text-sky-200"
        >
          {value}
        </a>
      ) : (
        <span className="font-semibold text-white">{value}</span>
      )}
    </div>
  );
}
