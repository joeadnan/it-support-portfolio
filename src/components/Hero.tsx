import {
  ArrowUpRight,
  Download,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Monitor,
  Network,
  Headphones,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import { profile, availability } from "../data/portfolio";

export function Hero() {
  const expertise = [
    { icon: Monitor, title: "Hardware Support" },
    { icon: Network, title: "Networking" },
    { icon: Wrench, title: "Troubleshooting" },
    { icon: Headphones, title: "Helpdesk" },
  ];

  const workTypes = availability.workTypes || [];
  const targetRoles = availability.targetRoles || [];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#070D1B] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* PROFILE CARD
              Mobile: tampil pertama
              Desktop: kolom kanan */}
          <div className="order-1 mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:order-2 lg:max-w-[430px]">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111B2D] p-3 shadow-2xl shadow-black/30 sm:p-4 lg:rounded-[28px] lg:p-5">
              <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-b from-[#203652] to-[#101827]">
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="h-[220px] w-full object-cover object-top sm:h-[280px] lg:h-[365px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-4 pb-4 pt-16">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-sky-300" />

                    <p className="text-sm font-semibold text-white">
                      IT Support Specialist
                    </p>
                  </div>

                  <p className="mt-1 text-xs text-slate-300">
                    Technical Support & System Maintenance
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 lg:mt-5">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 lg:p-4">
                  <p className="text-2xl font-bold text-white lg:text-3xl">
                    2+
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 lg:p-4">
                  <p className="text-base font-bold text-sky-300 lg:text-lg">
                    IT Support
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Technical Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PROFILE INFORMATION
              Mobile: tampil setelah foto
              Desktop: kolom kiri */}
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-xs font-medium text-sky-300 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>{profile.status}</span>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
              Hello, I'm
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[58px]">
              {profile.name}
            </h1>

            <h2 className="mt-4 bg-gradient-to-r from-sky-300 via-cyan-200 to-slate-200 bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl lg:text-[35px]">
              {profile.role}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:mx-0">
              {profile.summary}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Lihat Project
                <ArrowUpRight size={17} />
              </a>

              <a
                href={profile.cv}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Download size={17} />
                Download CV
              </a>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi WhatsApp"
                className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-slate-300 transition hover:text-emerald-300"
              >
                <MessageCircle size={19} />
              </a>
            </div>

            {/* Availability */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} className="text-sky-400" />
                {availability.location}
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                {availability.status}
              </span>
            </div>

            {/* Preferences */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {targetRoles.slice(0, 2).map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400"
                >
                  {role}
                </span>
              ))}

              {workTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-16 border-t border-white/10 pt-7 lg:mt-24">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
            {expertise.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/[0.07] text-sky-300">
                  <Icon size={19} />
                </div>
                <p className="text-xs font-medium text-slate-300 sm:text-sm">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden border-b border-white/10 bg-slate-950"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_35%)]" />

//       {/* KEMBALI KE LAYOUT 2 KOLOM */}
//       <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
//         {/* KOLOM 1: Informasi Profil */}
//         <div>
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
//             <span className="h-2 w-2 rounded-full bg-emerald-400" />
//             {profile.status}
//           </div>

//           {/* PEMBUNGKUS FLEX: Membuat Foto Menempel Tepat di Samping Nama (Bagian Paling Atas) */}
//           <div className="flex items-start justify-between gap-4 sm:justify-start sm:gap-6">
//             {/* Nama dan Role */}
//             <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
//               {profile.name}
//               <span className="mt-3 block bg-gradient-to-r from-sky-300 to-orange-300 bg-clip-text text-transparent">
//                 {profile.role}
//               </span>
//             </h1>

//             {/* Foto Profil Responsive (Menempel di Kanan Nama, Rata Atas) */}
//             {/* Ukuran diperbesar: HP (80px) -> Tablet (96px) -> Laptop/PC (112px) */}
//             <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32 md:h-36 md:w-36 mt-1 md:mt-2">
//               <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/10 opacity-75" />
//               <img
//                 src={profile.imageUrl || "https://unsplash.com"}
//                 alt={profile.name}
//                 className="relative h-full w-full rounded-full border-2 border-sky-400 object-cover shadow-xl"
//               />
//             </div>
//           </div>

//           <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
//             {profile.summary}
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href={profile.cv}
//               target="_blank"
//               rel="noreferrer"
//               download
//               className="rounded-xl bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
//             >
//               Download CV
//             </a>

//             <a
//               href={profile.whatsapp}
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
//             >
//               Hubungi WhatsApp
//             </a>

//             <a
//               href="#projects"
//               className="rounded-xl border border-white/15 px-6 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10"
//             >
//               Lihat Project
//             </a>
//           </div>

//           <div className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 sm:grid-cols-2">
//             <div>
//               <p className="text-slate-500">Status</p>
//               <p className="font-semibold text-emerald-300">
//                 {availability.status}
//               </p>
//             </div>

//             <div>
//               <p className="text-slate-500">Location</p>
//               <p className="font-semibold text-white">
//                 {availability.location}
//               </p>
//             </div>

//             <div>
//               <p className="text-slate-500">Target Role</p>
//               <p className="font-semibold text-white">
//                 {availability.targetRoles.slice(0, 2).join(" / ")}
//               </p>
//             </div>

//             <div>
//               <p className="text-slate-500">Work Type</p>
//               <p className="font-semibold text-white">
//                 {availability.workTypes.join(" / ")}
//               </p>
//             </div>
//           </div>

//           <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
//               <p className="text-2xl font-bold text-white">IT</p>
//               <p className="mt-1 text-sm text-slate-400">Support Focus</p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
//               <p className="text-2xl font-bold text-white">LAN</p>
//               <p className="mt-1 text-sm text-slate-400">Basic Network</p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
//               <p className="text-2xl font-bold text-white">Helpdesk</p>
//               <p className="mt-1 text-sm text-slate-400">Ticket Workflow</p>
//             </div>
//           </div>
//         </div>

//         {/* KOLOM 2: Dashboard Status */}
//         <div className="relative">
//           <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur">
//             <div className="mb-5 flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-slate-400">Troubleshooting Status</p>
//                 <h3 className="text-xl font-bold text-white">Daily IT Check</h3>
//               </div>
//               <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
//                 Active
//               </span>
//             </div>

//             <div className="space-y-4">
//               {[
//                 ["PC / Laptop", "Hardware check completed"],
//                 ["Network", "IP, DHCP, DNS verified"],
//                 ["Printer", "Sharing and driver checked"],
//                 ["Documentation", "Ticket notes updated"],
//               ].map(([title, desc]) => (
//                 <div
//                   key={title}
//                   className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
//                 >
//                   <div className="flex items-center justify-between">
//                     <p className="font-semibold text-white">{title}</p>
//                     <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
//                   </div>
//                   <p className="mt-1 text-sm text-slate-400">{desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-orange-400/20 bg-orange-400/10 p-5 text-orange-100 shadow-xl lg:block">
//             <p className="text-sm font-semibold">Focus Area</p>
//             <p className="mt-1 text-2xl font-bold">User Support</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
