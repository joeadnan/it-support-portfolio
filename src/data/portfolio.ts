import { Experience, Certification } from "../types/portfolio";

export const profile = {
  name: "Mohammad Hasim Adnan",
  role: "Junior IT Support & Helpdesk Technician",
  location: "Serang, Indonesia",
  status: "IT Support Specialist | 2 Years Experience",
  email: "hasyimjoe@gmail.com",
  phone: "083821359370",
  whatsapp: "https://wa.me/6283821359370",
  linkedin: "https://www.linkedin.com/in/mohammad-hasim-adnan/",
  github: "https://github.com/joeadnan/it-support-portfolio",
  cv: "/documents/CV_Mohammad_Hasim_Adnan.pdf",
  summary:
    "IT Support Specialist dengan 2 Tahun Pengalaman. Berpengalaman menangani support user, troubleshooting perangkat, jaringan kantor, printer, dan dokumentasi IT.",
};

export const skills = [
  {
    title: "Technical Support",
    items: [
      "Troubleshooting PC/laptop",
      "Instalasi Windows",
      "Instalasi driver dan software",
      "Printer setup & printer sharing",
      "Backup dan restore data user",
    ],
  },
  {
    title: "Network Support",
    items: [
      "LAN/Wi-Fi troubleshooting",
      "IP address, gateway, DNS, DHCP",
      "Ping, ipconfig, tracert, nslookup",
      "Basic router/switch troubleshooting",
    ],
  },
  {
    title: "User Support",
    items: [
      "Remote support",
      "Email support",
      "Microsoft Office support",
      "Support aplikasi internal",
      "Komunikasi dengan user non-teknis",
    ],
  },
  {
    title: "IT Operation",
    items: [
      "Inventory perangkat IT",
      "Dokumentasi troubleshooting",
      "Setup perangkat karyawan baru",
      "Ticket handling",
      "Preventive maintenance",
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
    title: "Troubleshooting Komputer Menyala tetapi Monitor Blank",
    category: "Hardware Troubleshooting",
    problem:
      "User melaporkan komputer menyala, kipas CPU aktif, tetapi monitor tidak menampilkan gambar. Aktivitas kerja user terhambat karena komputer tidak bisa digunakan.",
    analysis: [
      "Memastikan apakah masalah berasal dari monitor, kabel display, input source, port VGA/HDMI, RAM, atau unit CPU.",
      "Melakukan pengecekan bertahap agar tidak langsung menyimpulkan kerusakan hardware utama seperti motherboard atau VGA.",
    ],
    steps: [
      "Memeriksa kabel power monitor dan kabel HDMI/VGA.",
      "Memastikan input source monitor sudah sesuai dengan kabel yang digunakan.",
      "Mencoba kabel display dan monitor cadangan.",
      "Mematikan komputer, membuka casing, lalu memeriksa posisi RAM.",
      "Membersihkan pin RAM menggunakan penghapus/kain kering dan memasang ulang RAM dengan benar.",
      "Menyalakan kembali komputer dan memastikan tampilan BIOS/Windows muncul normal.",
    ],
    result:
      "Masalah ditemukan pada RAM yang longgar. Setelah RAM dibersihkan dan dipasang ulang, komputer kembali normal dan user dapat melanjutkan pekerjaan.",
    impact:
      "Downtime user berhasil dikurangi karena troubleshooting dilakukan langsung di lokasi tanpa perlu mengganti perangkat.",
    tools: [
      "Obeng",
      "Kabel HDMI/VGA",
      "Monitor cadangan",
      "Checklist troubleshooting",
    ],
    interviewPoint:
      "Saya biasanya melakukan pengecekan dari hal paling sederhana terlebih dahulu, seperti kabel dan monitor, sebelum masuk ke komponen internal seperti RAM atau VGA.",
  },
  {
    title: "Setup Printer Sharing untuk Beberapa User Kantor",
    category: "Network & Printer Support",
    problem:
      "Beberapa user tidak dapat mencetak dokumen dari komputer masing-masing karena printer hanya terhubung ke satu komputer utama.",
    analysis: [
      "Memastikan printer terbaca dengan baik di komputer host.",
      "Memastikan komputer client dan komputer host berada dalam jaringan yang sama.",
      "Memeriksa konfigurasi sharing, driver printer, dan akses antar komputer.",
    ],
    steps: [
      "Memeriksa koneksi printer ke komputer host.",
      "Memastikan driver printer sudah terinstall dan printer bisa test print dari komputer host.",
      "Mengaktifkan fitur printer sharing di Windows.",
      "Mengatur network discovery dan file/printer sharing.",
      "Menambahkan printer sharing dari komputer client melalui network path.",
      "Melakukan test print dari beberapa komputer user.",
    ],
    result:
      "Printer berhasil digunakan bersama oleh beberapa user dalam satu jaringan lokal.",
    impact:
      "Proses cetak dokumen menjadi lebih efisien karena user tidak perlu memindahkan file ke komputer host.",
    tools: [
      "Windows Settings",
      "Control Panel",
      "Printer Driver",
      "LAN",
      "Test Print",
    ],
    interviewPoint:
      "Saat menangani printer sharing, saya selalu pastikan printer normal di komputer host terlebih dahulu, baru lanjut cek jaringan dan akses dari komputer client.",
  },
  {
    title: "Membuat Simulasi Helpdesk Ticketing System",
    category: "Helpdesk Workflow & Documentation",
    problem:
      "Laporan masalah IT masih disampaikan secara informal melalui chat atau lisan, sehingga sulit dipantau status, prioritas, dan riwayat penyelesaiannya.",
    analysis: [
      "Masalah IT perlu dicatat agar mudah dipantau dan tidak ada laporan yang terlewat.",
      "Setiap tiket perlu memiliki kategori, prioritas, status, PIC, dan solusi akhir.",
    ],
    steps: [
      "Membuat format nomor tiket sederhana, contoh: TKT-2026-001.",
      "Membuat kategori masalah seperti hardware, software, jaringan, printer, dan akun user.",
      "Menentukan prioritas berdasarkan dampak dan urgensi.",
      "Membuat status tiket seperti open, in progress, pending user, resolved, dan closed.",
      "Mencatat kronologi masalah, tindakan yang dilakukan, dan solusi akhir.",
      "Membuat rekap tiket untuk evaluasi masalah yang sering terjadi.",
    ],
    result:
      "Alur penanganan masalah menjadi lebih rapi, terdokumentasi, dan mudah dipantau.",
    impact:
      "Tim IT dapat melihat masalah yang sering muncul dan membuat solusi pencegahan berdasarkan data tiket.",
    tools: ["Spreadsheet", "Ticketing Flow", "Documentation", "SLA Checklist"],
    interviewPoint:
      "Menurut saya, dokumentasi tiket penting karena IT Support bukan hanya menyelesaikan masalah, tetapi juga memastikan masalah bisa dilacak dan dievaluasi.",
  },
  {
    title: "Troubleshooting Koneksi Internet User Tidak Bisa Akses Website",
    category: "Network Troubleshooting",
    problem:
      "User melaporkan komputer terhubung ke jaringan LAN, tetapi tidak bisa membuka website atau mengakses internet.",
    analysis: [
      "Membedakan apakah masalah terjadi pada satu komputer, satu ruangan, atau seluruh jaringan.",
      "Memeriksa IP address, gateway, DNS, koneksi ke router, dan koneksi internet.",
    ],
    steps: [
      "Memeriksa koneksi kabel LAN dan indikator port jaringan.",
      "Menjalankan perintah ipconfig untuk melihat IP address, gateway, dan DNS.",
      "Melakukan ping ke gateway untuk memastikan koneksi lokal.",
      "Melakukan ping ke IP publik seperti 8.8.8.8 untuk mengecek koneksi internet.",
      "Melakukan nslookup untuk mengecek apakah DNS berjalan normal.",
      "Mengganti konfigurasi DNS atau melakukan renew IP jika diperlukan.",
      "Melakukan test akses website setelah perbaikan.",
    ],
    result:
      "Masalah ditemukan pada konfigurasi DNS. Setelah DNS diperbaiki, user dapat kembali mengakses website.",
    impact:
      "User dapat kembali bekerja tanpa perlu mengganti perangkat jaringan.",
    tools: ["Command Prompt", "ipconfig", "ping", "nslookup", "LAN Tester"],
    interviewPoint:
      "Untuk troubleshooting jaringan, saya biasanya cek bertahap dari physical connection, IP address, gateway, internet, lalu DNS.",
  },
  {
    title: "Instalasi dan Setup Perangkat untuk Karyawan Baru",
    category: "User Support & Device Setup",
    problem:
      "Karyawan baru membutuhkan komputer/laptop siap pakai lengkap dengan aplikasi kerja, akses jaringan, printer, dan akun email.",
    analysis: [
      "Perangkat harus disiapkan sesuai kebutuhan role user.",
      "Konfigurasi dasar harus distandarkan agar proses onboarding lebih cepat dan rapi.",
    ],
    steps: [
      "Melakukan instalasi Windows dan update sistem.",
      "Menginstall driver, browser, Microsoft Office, antivirus, dan aplikasi kerja.",
      "Mengatur hostname komputer sesuai format perusahaan.",
      "Menghubungkan perangkat ke jaringan kantor.",
      "Menambahkan akses printer sharing.",
      "Mengatur email user dan melakukan test kirim/terima email.",
      "Melakukan checklist akhir sebelum perangkat diserahkan ke user.",
    ],
    result:
      "Perangkat siap digunakan oleh karyawan baru sesuai kebutuhan kerja.",
    impact:
      "Proses onboarding user menjadi lebih cepat, rapi, dan mengurangi kendala teknis di hari pertama kerja.",
    tools: [
      "Windows Installer",
      "Driver Pack",
      "Microsoft Office",
      "Antivirus",
      "Checklist Setup",
    ],
    interviewPoint:
      "Saya terbiasa menggunakan checklist saat setup perangkat agar tidak ada konfigurasi penting yang terlewat.",
  },

  {
    title: "Troubleshooting Komputer Menyala Tapi Monitor Blank",
    category: "Hardware Troubleshooting",
    label: "Real Case",
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
      "Masalah ditemukan pada RAM yang longgar. Setelah RAM dipasang ulang, komputer kembali normal.",
    impact: [
      "Masalah selesai tanpa penggantian hardware",
      "Downtime user berkurang",
      "Perangkat bisa digunakan kembali di hari yang sama",
    ],
  },
];

export const tools = [
  {
    title: "Remote Support",
    items: [
      "AnyDesk",
      "TeamViewer",
      "Chrome Remote Desktop",
      "Windows Quick Assist",
    ],
  },
  {
    title: "Network Troubleshooting",
    items: ["Command Prompt", "ping", "ipconfig", "tracert", "nslookup"],
  },
  {
    title: "Windows Support",
    items: [
      "Device Manager",
      "Task Manager",
      "Disk Management",
      "Services",
      "Event Viewer",
    ],
  },
  {
    title: "Printer & Peripheral",
    items: [
      "Printer Driver",
      "Control Panel",
      "Print Spooler",
      "Printer Sharing",
      "Test Print",
    ],
  },
  {
    title: "Office & Productivity",
    items: [
      "Microsoft Office",
      "Microsoft Excel",
      "Microsoft Outlook",
      "Google Workspace",
    ],
  },
  {
    title: "Documentation & Ticketing",
    items: [
      "Google Docs",
      "Google Sheets",
      "Spreadsheet",
      "Checklist",
      "Ticketing Log",
    ],
  },
  {
    title: "Security & Maintenance",
    items: ["Windows Defender", "Antivirus", "Windows Update", "Backup Data"],
  },
];

export const learning = [
  "IT Support Fundamental",
  "Basic Networking",
  "Computer Hardware Troubleshooting",
  "Windows Installation & Maintenance",
  "Helpdesk Ticketing Workflow",
];

export const experiences: Experience[] = [
  {
    role: "IT Support",
    company: "PT. Asietex Sinar indopratama",
    period: "Desember 2024 - April 2026",
    location: "Jawilan, Serang",
    employmentType: "Full-time",
    summary:
      "Berpengalaman menangani support user harian, troubleshooting hardware, software, jaringan, printer, instalasi perangkat kerja, serta dokumentasi masalah dan solusi IT.",
    responsibilities: [
      "Menangani troubleshooting komputer, laptop, printer, software, dan koneksi jaringan user.",
      "Melakukan instalasi Windows, driver, aplikasi kerja, antivirus, dan konfigurasi perangkat kerja.",
      "Membantu user dalam kendala Microsoft Office, email, printer sharing, akses internet, dan aplikasi internal.",
      "Melakukan pengecekan jaringan dasar menggunakan ping, ipconfig, tracert, dan nslookup.",
      "Membantu setup perangkat untuk karyawan baru, termasuk komputer, akun, email, printer, dan aplikasi kerja.",
      "Mendokumentasikan masalah teknis dan solusi untuk kebutuhan knowledge base internal.",
    ],
    achievements: [
      "Mampu menangani request support harian dari user internal.",
      "Membantu mengurangi masalah berulang melalui dokumentasi troubleshooting.",
      "Terbiasa menyelesaikan kendala operasional IT dengan analisa bertahap.",
      "Berpengalaman berkomunikasi dengan user non-teknis secara jelas dan sabar.",
    ],
    tools: [
      "Windows 10/11",
      "Microsoft Office",
      "Google Workspace",
      "Outlook",
      "AnyDesk",
      "TeamViewer",
      "Command Prompt",
      "Printer Epson/Canon/HP",
      "Basic Networking",
    ],
  },
  {
    role: "Helpdesk",
    company: "SD Negeri Baluk",
    period: "Juli 2023 - Desember 2024",
    location: "Cikande, Serang",
    employmentType: "Full-time",
    summary:
      "Berpengalaman menangani layanan helpdesk, support user harian, troubleshooting hardware, software, jaringan, printer, instalasi perangkat kerja, serta dokumentasi masalah dan solusi IT di lingkungan sekolah.",
    responsibilities: [
      "Menangani kendala komputer, laptop, printer, software, dan koneksi jaringan user.",
      "Melakukan instalasi Windows, driver, aplikasi kerja, antivirus, dan konfigurasi perangkat kerja.",
      "Membantu guru, staff, dan user internal dalam kendala Microsoft Office, email, printer sharing, akses internet, dan aplikasi kerja.",
      "Melakukan pengecekan jaringan dasar menggunakan ping, ipconfig, tracert, dan nslookup.",
      "Membantu setup perangkat kerja, termasuk komputer, akun, printer, dan aplikasi pendukung operasional sekolah.",
      "Mendokumentasikan masalah teknis dan solusi untuk kebutuhan knowledge base internal.",
    ],
    achievements: [
      "Mampu menangani request support harian dari user internal.",
      "Membantu operasional sekolah tetap berjalan melalui penyelesaian kendala IT secara cepat.",
      "Membantu mengurangi masalah berulang melalui dokumentasi troubleshooting.",
      "Terbiasa menyelesaikan kendala operasional IT dengan analisa bertahap.",
      "Berpengalaman berkomunikasi dengan user non-teknis secara jelas dan sabar.",
    ],
    tools: [
      "Windows 10/11",
      "Microsoft Office",
      "Google Workspace",
      "Outlook",
      "AnyDesk",
      "TeamViewer",
      "Command Prompt",
      "Printer Epson/Canon/HP",
      "Basic Networking",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "ethical-hacking",
    title: "Ethical Hacking Certificate",
    issuer: "Cisco / Coursera",
    year: "2022",
    status: "Completed",
    category: "Cyber Security",
    imageUrl: "/certifications/CyberScurity.png",
    description:
      "Mempelajari dasar ethical hacking, keamanan jaringan, vulnerability assessment, penetration testing dasar, reconnaissance, scanning, dan praktik keamanan sistem.",
    skills: [
      "Ethical Hacking",
      "Cyber Security",
      "Network Security",
      "Vulnerability Assessment",
      "Penetration Testing Basics",
      "Reconnaissance",
      "Scanning",
      "Security Awareness",
    ],
  },
  {
    id: "networking-basics",
    title: "Networking Basics",
    issuer: "CCNA ITBOX",
    year: "2023",
    status: "Completed",
    category: "Networking",
    imageUrl: "/certifications/Computer_Network_Course_Level_Advanced.jpg",
    description:
      "Memahami dasar jaringan komputer, IP address, router, switch, DNS, DHCP, dan koneksi internet.",
    skills: ["TCP/IP", "DNS", "DHCP", "Router", "Switch", "Ping"],
  },
  {
    id: "microsoft-office",
    title: "Microsoft Office & Productivity",
    issuer: "Self Learning / Workplace Practice",
    year: "2025",
    status: "Completed",
    category: "Productivity",
    imageUrl: "/certifications/Sertificat_Office.jpg",
    description:
      "Terbiasa membantu user dalam penggunaan Microsoft Office, Excel, email, dokumen kerja, dan kebutuhan administrasi harian.",
    skills: ["Microsoft Word", "Excel", "Email", "Google Workspace"],
  },
];

export const availability = {
  status: "Open to Work",
  targetRoles: [
    "Junior IT Support",
    "Helpdesk Support",
    "Technical Support",
    "IT Support Staff",
  ],
  workTypes: ["Onsite", "Hybrid", "Remote"],
  location: "Indonesia",
};

export const educationBackground = {
  school: "Masukkan nama sekolah / kampus / kursus",
  major: "IT Support / Computer & Network Basics",
  period: "2026",
  description:
    "Memiliki fokus pembelajaran pada troubleshooting komputer, jaringan dasar, sistem operasi, remote support, dan dokumentasi teknis.",
  focus: [
    "Hardware Troubleshooting",
    "Operating System",
    "Networking Basics",
    "Remote Support",
    "Technical Documentation",
  ],
};

export const documentationSamples = [
  {
    title: "Preventive Maintenance Checklist",
    description:
      "Checklist pengecekan rutin perangkat komputer untuk membantu mencegah masalah hardware, software, dan performa sistem.",
    fileUrl: "/documents/checklist-preventive-maintenance.pdf",
    tags: ["Maintenance", "Checklist", "IT Asset"],
  },
  {
    title: "SOP Instalasi Komputer Baru",
    description:
      "Panduan instalasi komputer baru mulai dari setup OS, driver, aplikasi kerja, user account, hingga pengecekan akhir.",
    fileUrl: "/documents/sop-instalasi-komputer-baru.pdf",
    tags: ["SOP", "Installation", "Windows"],
  },
  {
    title: "Form Serah Terima Aset IT",
    description:
      "Template dokumentasi penyerahan perangkat IT kepada user agar aset lebih terkontrol dan mudah ditelusuri.",
    fileUrl: "/documents/form-serah-terima-aset-it.pdf",
    tags: ["Asset", "Documentation", "Handover"],
  },
  {
    title: "Troubleshooting Guide Jaringan",
    description:
      "Panduan pengecekan dasar koneksi jaringan seperti IP address, gateway, DNS, ping test, dan koneksi internet.",
    fileUrl: "/documents/troubleshooting-guide-jaringan.pdf",
    tags: ["Network", "Troubleshooting", "DNS"],
  },
];

export const whyHireMe = [
  {
    title: "Memiliki pola troubleshooting yang terstruktur",
    description:
      "Saya terbiasa menganalisa masalah dari pengecekan paling sederhana seperti kabel, power, koneksi, konfigurasi dasar, hingga pengecekan sistem.",
  },
  {
    title: "Mampu membantu user non-teknis",
    description:
      "Saya berusaha menjelaskan masalah teknis dengan bahasa sederhana agar user memahami kondisi dan solusi yang diberikan.",
  },
  {
    title: "Teliti dalam dokumentasi",
    description:
      "Saya memahami pentingnya dokumentasi seperti checklist maintenance, SOP instalasi, form aset, dan catatan penyelesaian masalah.",
  },
  {
    title: "Siap berkembang sebagai Junior IT Support",
    description:
      "Portfolio ini saya buat untuk menunjukkan kesiapan saya dalam menjalankan tugas dasar IT Support, Helpdesk, dan Technical Support.",
  },
];
