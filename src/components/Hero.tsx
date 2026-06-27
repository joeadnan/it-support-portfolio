import { profile, stats } from "../data/portfolio";

const networkNodes = [
  { label: "User", state: "active" },
  { label: "Switch", state: "active" },
  { label: "Router", state: "warning" },
  { label: "Internet", state: "active" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pb-20 pt-32 md:pt-36"
    >
      <div className="site-container grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-16">
        <div>
          <div className="animate-fade-up inline-flex w-fit items-center gap-2.5 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2.5 text-sm font-bold text-sky-100">
            <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse-ring" />{" "}
            Available for IT Support Role
          </div>

          <h1 className="animate-fade-up delay-1 mt-7 text-[clamp(3rem,8vw,6.8rem)] font-black leading-[0.92] tracking-[-0.075em] text-white">
            {profile.name}
            <span className="mt-3 block bg-gradient-to-br from-white via-sky-300 to-orange-400 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="animate-fade-up delay-2 mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            {profile.summary}
          </p>

          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3.5">
            <a href="#projects" className="primary-button">
              Lihat Project
            </a>
            <a href="#contact" className="ghost-button">
              Hubungi Saya
            </a>
          </div>
          <div className="animate-fade-up delay-4 mt-11 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-slate-900/50 p-4"
              >
                <strong className="block text-xl font-black text-white">
                  {item.value}
                </strong>
                <span className="mt-2 block text-sm text-slate-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative min-h-[460px] animate-hero-float md:min-h-[540px]"
          aria-label="Visual IT Support portfolio"
        >
          <div className="absolute right-14 top-8 size-52 rounded-full bg-sky-400/30 blur-2xl" />
          <div className="absolute bottom-10 left-2 size-48 rounded-full bg-orange-400/20 blur-2xl" />

          <div className="glass-card absolute inset-x-0 top-14 mx-auto w-full max-w-[460px] rounded-[2rem] p-6 md:top-16 lg:right-0 lg:left-auto">
            <div className="mb-7 flex gap-2">
              <span className="size-3 rounded-full bg-rose-400" />
              <span className="size-3 rounded-full bg-orange-400" />
              <span className="size-3 rounded-full bg-emerald-400" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 font-mono text-sm text-lime-200">
              <span className="text-sky-400">$</span> checking network status...
            </div>

            <div className="my-7 flex items-center overflow-x-auto pb-1">
              {networkNodes.map((node, index) => (
                <div
                  key={node.label}
                  className="flex flex-1 items-center first:flex-none"
                >
                  {index > 0 && (
                    <div className="network-scan-line h-0.5 min-w-8 flex-1 bg-gradient-to-r from-sky-400/70 to-orange-400/70" />
                  )}
                  <div
                    className={`min-w-20 rounded-full border px-3 py-2 text-center text-xs font-black ${
                      node.state === "active"
                        ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-100"
                        : "border-orange-400/45 bg-orange-400/10 text-orange-100"
                    }`}
                  >
                    {node.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3">
              {[
                ["Ticket SLA", "96%"],
                ["Device Health", "Good"],
                ["Backup Status", "Synced"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 text-sm text-slate-400"
                >
                  <span>{label}</span>
                  <strong className="text-white">{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card absolute left-0 top-0 flex animate-float-card items-center gap-3 rounded-3xl p-4">
            <span className="grid size-11 place-items-center rounded-2xl bg-sky-400/10 text-xl">
              🎧
            </span>
            <div>
              <strong className="block text-white">P1 Critical</strong>
              <p className="mt-1 text-sm text-slate-400">Network restored</p>
            </div>
          </div>

          <div className="glass-card absolute bottom-3 right-0 flex animate-float-card items-center gap-3 rounded-3xl p-4 [animation-delay:1.1s] md:bottom-16 md:right-5">
            <span className="grid size-11 place-items-center rounded-2xl bg-sky-400/10 text-xl">
              🛡️
            </span>
            <div>
              <strong className="block text-white">Backup</strong>
              <p className="mt-1 text-sm text-slate-400">Daily completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
