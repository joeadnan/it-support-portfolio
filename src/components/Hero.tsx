import { profile } from "../data/portfolio";

export function Hero() {
  console.log("Memeriksa data profil:", profile);
  console.log("Tautan CV saat ini:", profile.cv);
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {profile.status}
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {profile.name}
            <span className="mt-3 block bg-gradient-to-r from-sky-300 to-orange-300 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
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
              Hubungi WhatsApp
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10"
            >
              Lihat Project
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-bold text-white">IT</p>
              <p className="mt-1 text-sm text-slate-400">Support Focus</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-bold text-white">LAN</p>
              <p className="mt-1 text-sm text-slate-400">Basic Network</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-bold text-white">Helpdesk</p>
              <p className="mt-1 text-sm text-slate-400">Ticket Workflow</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Troubleshooting Status</p>
                <h3 className="text-xl font-bold text-white">Daily IT Check</h3>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Active
              </span>
            </div>

            <div className="space-y-4">
              {[
                ["PC / Laptop", "Hardware check completed"],
                ["Network", "IP, DHCP, DNS verified"],
                ["Printer", "Sharing and driver checked"],
                ["Documentation", "Ticket notes updated"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{title}</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-orange-400/20 bg-orange-400/10 p-5 text-orange-100 shadow-xl lg:block">
            <p className="text-sm font-semibold">Focus Area</p>
            <p className="mt-1 text-2xl font-bold">User Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
