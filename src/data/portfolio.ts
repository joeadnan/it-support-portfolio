import type {
  CaseStudy,
  DocumentItem,
  Project,
  Skill,
  TimelineItem,
} from "../types/portfolio";

export const profile = {
  name: "Mohammad Hasim Adnan",
  role: "IT Support Professional",
  tagline:
    "Helpdesk, Infrastructure, Troubleshooting & Technical Documentation",
  location: "Indonesia",
  email: "Hasyimjoe@gmail.com",
  phone: "+62 838-2135-9370",
  linkedin: "linkedin.com/in/mohammad-hasim-adnan",
  github: "github.com/username",
  summary:
    "Saya membantu operasional perusahaan tetap berjalan stabil melalui dukungan teknis, troubleshooting perangkat, jaringan, sistem, dokumentasi, dan improvement proses IT.",
};

export const stats = [
  { label: "Perangkat", value: "100+" },
  { label: "Gangguan berkurang", value: "80%" },
  { label: "SOP & Checklist", value: "10+" },
  { label: "Project portfolio", value: "6" },
];

export const skills: Skill[] = [
  {
    title: "Hardware & OS",
    description:
      "Instalasi Windows, driver, troubleshooting PC/laptop, printer, RAM, SSD, dan peripheral.",
    level: "Advanced",
    icon: "🖥️",
  },
  {
    title: "Networking",
    description:
      "LAN/WiFi troubleshooting, IP address, DHCP, DNS, gateway, router, access point, dan switch.",
    level: "Intermediate",
    icon: "🌐",
  },
  {
    title: "Helpdesk Support",
    description:
      "Pencatatan tiket, prioritas, SLA, komunikasi user, eskalasi, dan dokumentasi solusi.",
    level: "Advanced",
    icon: "🎧",
  },
  {
    title: "Backup & Recovery",
    description:
      "Backup file/database, cloud sync, jadwal otomatis, retensi backup, dan testing restore.",
    level: "Intermediate",
    icon: "🛡️",
  },
  {
    title: "CCTV & Security Device",
    description:
      "Konfigurasi DVR/NVR, IP camera, Hik-Connect, remote view, playback, dan mapping kamera.",
    level: "Intermediate",
    icon: "📹",
  },
  {
    title: "Documentation",
    description:
      "SOP, checklist maintenance, form serah terima aset, knowledge base, dan laporan teknis.",
    level: "Advanced",
    icon: "📋",
  },
];

export const projects: Project[] = [
  {
    title: "Helpdesk Ticketing System",
    category: "IT Operation",
    summary:
      "Membuat alur pencatatan tiket IT agar setiap keluhan user memiliki status, prioritas, SLA, assign teknisi, dan histori penyelesaian.",
    tools: ["React", "Laravel", "MySQL", "SLA Matrix", "Email Notification"],
    results: [
      "Keluhan user terdokumentasi rapi",
      "Prioritas tiket lebih jelas",
      "Laporan performa IT lebih mudah dibuat",
    ],
    // link: ["http://"],
    accent: "blue",
  },
  {
    title: "IT Asset Inventory",
    category: "Asset Management",
    summary:
      "Membangun template inventaris aset IT untuk tracking laptop, PC, printer, monitor, router, access point, user pengguna, lokasi, dan status perangkat.",
    tools: ["Google Sheets", "QR Code", "Asset Tag", "Maintenance Log"],
    results: [
      "Data aset lebih mudah diaudit",
      "Riwayat service perangkat tercatat",
      "Perencanaan upgrade lebih terukur",
    ],
    accent: "emerald",
  },
  {
    title: "Network Troubleshooting SOP",
    category: "Infrastructure",
    summary:
      "Menyusun SOP troubleshooting jaringan untuk kasus internet lambat, WiFi disconnect, IP conflict, gagal DHCP, DNS issue, dan akses printer/server.",
    tools: ["CMD", "Ping", "Tracert", "Ipconfig", "LAN Tester", "Router Panel"],
    results: [
      "Analisa masalah lebih cepat",
      "Downtime user berkurang",
      "Solusi berulang masuk knowledge base",
    ],
    accent: "orange",
  },
  {
    title: "Standard PC Deployment",
    category: "Endpoint Management",
    summary:
      "Membuat standar instalasi komputer kantor dari OS, driver, aplikasi kerja, konfigurasi printer, network share, antivirus, dan serah terima user.",
    tools: [
      "Windows Installer",
      "OEM Driver",
      "Microsoft Office",
      "AnyDesk",
      "Checklist",
    ],
    results: [
      "Setup perangkat lebih konsisten",
      "Waktu deployment lebih efisien",
      "User siap bekerja tanpa konfigurasi ulang",
    ],
    accent: "violet",
  },
  {
    title: "Backup Automation",
    category: "Data Protection",
    summary:
      "Membuat proses backup otomatis untuk data penting dengan struktur daily, weekly, monthly, log backup, retensi file, dan uji restore berkala.",
    tools: ["Task Scheduler", "Cron", "rclone", "Google Drive", "7zip"],
    results: [
      "Risiko kehilangan data menurun",
      "Backup bisa dipantau lewat log",
      "Restore data sudah memiliki prosedur",
    ],
    accent: "cyan",
  },
  {
    title: "CCTV Remote Monitoring",
    category: "Security Device",
    summary:
      "Instalasi dan konfigurasi CCTV kantor meliputi setting DVR/NVR, IP camera, storage rekaman, remote access, live view, playback, dan dokumentasi titik kamera.",
    tools: ["Hik-Connect", "SADP Tool", "NVR/DVR", "IP Camera", "LAN Tester"],
    results: [
      "Monitoring area kantor lebih mudah",
      "Playback rekaman berjalan normal",
      "Titik kamera terdokumentasi",
    ],
    accent: "rose",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Monitor Menyala tapi Blank Screen",
    problem:
      "User melaporkan CPU menyala dan monitor aktif, tetapi layar tidak menampilkan gambar.",
    analysis: [
      "Cek kabel HDMI/VGA/DisplayPort dan input source monitor.",
      "Test dengan monitor atau kabel lain untuk isolasi masalah.",
      "Cek RAM, storage boot, dan indikator motherboard.",
    ],
    solution:
      "RAM dibersihkan dan dipasang ulang, lalu perangkat berhasil booting normal.",
    impact:
      "User dapat kembali bekerja dan perangkat dimasukkan ke daftar monitoring jika masalah berulang.",
  },
  {
    title: "User Tidak Mendapat IP dari DHCP",
    problem:
      "Laptop user terkoneksi ke LAN tetapi tidak bisa internet dan mendapat IP 169.254.x.x.",
    analysis: [
      "Cek status adapter dan jalankan ipconfig.",
      "Ping gateway untuk memastikan koneksi ke jaringan lokal.",
      "Cek kabel, switch port, DHCP router, dan kemungkinan IP conflict.",
    ],
    solution:
      "Kabel LAN diganti dan DHCP lease diperbarui dengan ipconfig /release dan /renew.",
    impact:
      "Koneksi internet normal kembali dan port switch diberi label agar mudah dilacak.",
  },
  {
    title: "Printer Sharing Tidak Bisa Print",
    problem:
      "Beberapa user tidak bisa mencetak ke printer sharing di jaringan kantor.",
    analysis: [
      "Cek status printer, print queue, dan service Print Spooler.",
      "Ping IP printer dan cek akses dari host sharing.",
      "Validasi driver printer dan permission sharing.",
    ],
    solution:
      "Print queue dibersihkan, service Print Spooler direstart, dan printer ditambahkan ulang berdasarkan IP.",
    impact:
      "Printer kembali normal dan dibuat SOP singkat reset spooler untuk tim support.",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "Step 01",
    title: "Identify",
    description:
      "Kumpulkan informasi masalah, user terdampak, waktu kejadian, perangkat, dan urgensi.",
  },
  {
    period: "Step 02",
    title: "Diagnose",
    description:
      "Pisahkan kemungkinan penyebab dari sisi hardware, software, jaringan, akses, atau user error.",
  },
  {
    period: "Step 03",
    title: "Resolve",
    description:
      "Lakukan perbaikan dengan prioritas memulihkan operasional user secepat mungkin.",
  },
  {
    period: "Step 04",
    title: "Document",
    description:
      "Catat akar masalah, solusi, bukti testing, dan pencegahan agar tidak terulang.",
  },
];

export const documents = [
  {
    title: "SOP Instalasi Komputer Baru",
    description:
      "Panduan standar instalasi komputer/laptop baru mulai dari OS, driver, aplikasi kerja, jaringan, printer, hingga serah terima user.",
    category: "SOP",
    url: "/documents/sop-instalasi-komputer-baru.pdf",
  },
  {
    title: "Checklist Preventive Maintenance",
    description:
      "Checklist pengecekan rutin perangkat IT seperti komputer, printer, jaringan, storage, antivirus, dan backup data.",
    category: "Checklist",
    url: "/documents/checklist-preventive-maintenance.pdf",
  },
  {
    title: "Form Serah Terima Aset IT",
    description:
      "Template form untuk mencatat penyerahan perangkat IT kepada user, termasuk kondisi perangkat dan kelengkapan aset.",
    category: "Form",
    url: "/documents/form-serah-terima-aset-it.pdf",
  },
  {
    title: "Troubleshooting Guide Jaringan",
    description:
      "Panduan troubleshooting masalah jaringan seperti tidak bisa internet, IP conflict, DHCP error, DNS issue, dan WiFi lambat.",
    category: "Guide",
    url: "/documents/troubleshooting-guide-jaringan.pdf",
  },
];
