export const profile = {
  name: "Mohammad Hasim Adnan",
  role: "Junior IT Support & Helpdesk Technician",
  location: "Serang, Indonesia",
  status: "Open for Junior IT Support / Helpdesk Role",
  email: "hasyimjoe@gmail.com",
  phone: "083821359370",
  whatsapp: "https://wa.me/6283821359370",
  linkedin: "https://www.linkedin.com/in/username",
  github: "https://github.com/username",
  cv: "/cv-mohammad-hasim-adnan.pdf",
  summary:
    "Saya membantu menangani masalah teknis harian seperti troubleshooting komputer, jaringan, printer, software, email, dan support user dengan dokumentasi kerja yang rapi.",
};

export const skills = [
  {
    title: "Helpdesk & User Support",
    items: [
      "Troubleshooting user",
      "Remote support",
      "Ticket handling",
      "Dokumentasi masalah",
      "Komunikasi dengan user",
    ],
  },
  {
    title: "Hardware",
    items: [
      "PC & laptop",
      "RAM",
      "SSD / HDD",
      "Printer",
      "Scanner",
      "Peripheral",
    ],
  },
  {
    title: "Network",
    items: [
      "LAN",
      "WiFi",
      "IP Address",
      "DHCP",
      "DNS",
      "Gateway",
      "Ping / Traceroute",
    ],
  },
  {
    title: "Operating System",
    items: [
      "Windows 10",
      "Windows 11",
      "Instalasi OS",
      "Driver",
      "Basic Linux",
    ],
  },
];

export const workflow = [
  {
    step: "01",
    title: "Terima Laporan",
    description:
      "Mencatat masalah user, lokasi, perangkat yang digunakan, dan dampak terhadap pekerjaan.",
  },
  {
    step: "02",
    title: "Identifikasi Masalah",
    description:
      "Melakukan pengecekan awal untuk mengetahui apakah masalah berasal dari hardware, software, jaringan, atau user configuration.",
  },
  {
    step: "03",
    title: "Tentukan Prioritas",
    description:
      "Menentukan tingkat urgensi berdasarkan jumlah user terdampak dan dampaknya terhadap operasional.",
  },
  {
    step: "04",
    title: "Troubleshooting",
    description:
      "Melakukan pengecekan bertahap menggunakan checklist agar proses analisa lebih rapi dan tidak asal coba.",
  },
  {
    step: "05",
    title: "Solusi / Eskalasi",
    description:
      "Memberikan solusi langsung jika bisa diselesaikan, atau melakukan eskalasi jika membutuhkan akses atau pihak lain.",
  },
  {
    step: "06",
    title: "Dokumentasi",
    description:
      "Mencatat penyebab masalah, langkah penyelesaian, hasil akhir, dan rekomendasi pencegahan.",
  },
];

export const projects = [
  {
    title: "Troubleshooting Komputer Menyala Tapi Monitor Blank",
    category: "Hardware Troubleshooting",
    problem:
      "User melaporkan CPU menyala tetapi monitor tidak menampilkan gambar.",
    steps: [
      "Cek kabel HDMI/VGA dan power monitor",
      "Cek input source monitor",
      "Cek kondisi RAM",
      "Tes menggunakan monitor dan kabel lain",
      "Cek display output dari CPU",
    ],
    result:
      "Masalah ditemukan pada RAM yang longgar. Setelah RAM dibersihkan dan dipasang ulang, komputer kembali normal.",
    tools: ["Obeng", "Kabel HDMI/VGA", "Monitor cadangan", "Checklist"],
  },
  {
    title: "Setup Printer Sharing di Jaringan Kantor",
    category: "Network & Printer",
    problem:
      "Beberapa user tidak dapat mencetak dokumen dari komputer masing-masing.",
    steps: [
      "Cek koneksi jaringan komputer utama",
      "Pastikan printer terbaca di komputer host",
      "Aktifkan printer sharing",
      "Tambahkan printer di komputer client",
      "Lakukan test print dari beberapa komputer",
    ],
    result:
      "Printer berhasil digunakan bersama oleh beberapa user dalam satu jaringan.",
    tools: ["Windows Settings", "Control Panel", "LAN", "Printer Driver"],
  },
  {
    title: "Simulasi Helpdesk Ticketing System",
    category: "Helpdesk Workflow",
    problem:
      "Laporan masalah IT belum terdokumentasi dengan rapi sehingga sulit dipantau.",
    steps: [
      "Membuat kategori masalah",
      "Membuat nomor tiket",
      "Menentukan prioritas",
      "Menambahkan status tiket",
      "Mencatat solusi setiap tiket",
    ],
    result:
      "Alur penanganan masalah menjadi lebih rapi, mudah dipantau, dan terdokumentasi.",
    tools: ["Spreadsheet", "Ticketing Flow", "Documentation"],
  },
];

export const tools = [
  {
    title: "Remote Support",
    items: ["AnyDesk", "TeamViewer", "Chrome Remote Desktop"],
  },
  {
    title: "Troubleshooting",
    items: ["Command Prompt", "Ping", "Traceroute", "Device Manager"],
  },
  {
    title: "Office & Productivity",
    items: ["Microsoft Office", "Google Workspace", "Excel"],
  },
  {
    title: "Documentation",
    items: ["Google Docs", "Spreadsheet", "Notion", "Checklist"],
  },
];

export const learning = [
  "IT Support Fundamental",
  "Basic Networking",
  "Computer Hardware Troubleshooting",
  "Windows Installation & Maintenance",
  "Helpdesk Ticketing Workflow",
];
