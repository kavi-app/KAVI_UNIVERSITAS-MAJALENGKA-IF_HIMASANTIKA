import fikar from "../assets/images/people/5.png";
import septian from "../assets/images/people/1.png";
import roni from "../assets/images/people/4.png";

import img1 from "../assets/images/lab.jpg";
import img2 from "../assets/images/kelas1.jpeg";
import img3 from "../assets/images/praktik.jpeg";
import { Cpu, GraduationCap, Mosque, University, UsersRound } from "lucide-react";


export const data = {
  first_section: {
    title1: "IF.",
    title2: "UMC",
    desc: ["INFORMATIKA", "UNIVERSITAS", "MUHAMMADIYAH", "CIREBON"],
  },
  second_section: {
    title: "Program Studi S1 Teknik Informatika",
    main_title: "TENTANG",
    desc: "Program Studi S1 Teknik Informatika Universitas Muhammadiyah Cirebon (UMC) adalah institusi pendidikan tinggi yang berdedikasi untuk mencetak lulusan unggul, inovatif, dan berakhlak mulia di bidang teknologi informasi. Kami membekali mahasiswa dengan keahlian praktis dan teoretis yang relevan dengan kebutuhan industri digital masa kini.",
  },
  circle_information_section: {
    title: "VISI",
    title2: "MISI",
    desc: "Menjadi Program Studi yang Unggul dalam mencetak Tenaga terampil yang Islami dan Mandiri di Wilayah Jawa Barat pada tahun 2024.",
    list: [
      { icon: University, title: "1", value: "Tumbuh kembangnya sikap kewirusahaan dalam bidang rekayasa teknologi di kalangan civitas akademika program Studi S1 Teknik Informatika." },
      { icon: UsersRound, title: "2", value: "Terselenggaranya kegiatan pengabdian kepada masyarakat dalam bidang rekayasa teknologi." },
      { icon: Cpu, title: "3", value: "Terselenggaranya kegiatan penelitian dalam bidang rekayasa teknologi melalui kerjasama dengan pihak industri dan instansi pemerintahan baik dalam maupun luar negeri." },
      { icon: GraduationCap, title: "4", value: "Terselenggaranya pendidikan dan pengajaran yang berorientasi pada kompetensi bidang rekayasa teknologi yang sesuai dengan perkembangan kebutuhan dunia usaha dan industri." },
      { icon: Mosque, title: "5", value: "Menanamkan nilai-nilai Islam kepada seluruh civitas akademika Program Studi S1 Teknik Informatika secara komperhensif." },
    ],
  },
  people_information_section: {
    title: "FASILITAS AKADEMIK.",
    desc: "Untuk menunjang kegiatan belajar mengajar yang berorientasi pada kompetensi rekayasa teknologi, Program Studi S1 Teknik Informatika menyediakan sarana yang memadai :",
    list: [
      { name: "Fikar M. Istiqlalulwathon", role: "Superman", ig: "@andkjsnd", img: fikar },
      { name: "Septian Triana", role: "Ketua", ig: "@andkjsnd", img: septian },
      { name: "Ade Roni Pratama", role: "Anggota", ig: "@andkjsnd", img: roni },
    ]
  },
    
  img_section: [
    {
      title: "LABORATORIUM KOMPUTER",
      image: img1,
      desc: "Fasilitas lab yang dirancang khusus untuk praktik pemrograman, rekayasa perangkat lunak, dan pengolahan data.",
    },
    {
      title: "RUANG KELAS INTERAKTIVE",
      image: img2,
      desc: " Fasilitas ruang kelas yang sangat memadai, kondusif, dan dilengkapi dengan pendingin ruangan (AC) serta proyektor / layar pintar (smartboard) untuk mendukung presentasi dan pengajaran visual.",
    },
        {
      title: "RUANG PRAKTIK JARINGAN",
      image: img3,
      desc: "Area pembelajaran bagi mahasiswa untuk melakukan praktik perakitan hardware dan instalasi infrastruktur jaringan komputer secara langsung.",
    },

  ],
  project_section: {
    title: "Kegiatan Kampus.",
    desc: "Beragam kegiatan akademik, organisasi, sosial, dan pengembangan minat bakat untuk mendukung pengalaman serta prestasi mahasiswa.",
    list: [
      { name: "1", img: "./public/kegiatan/1.jpeg" },
      { name: "2", img: "./public/kegiatan/2.jpeg" },
      { name: "3", img: "./public/kegiatan/3.jpeg" },
      { name: "4", img: "./public/kegiatan/4.jpg" },
      { name: "5", img: "./public/kegiatan/5.jpeg" },
      { name: "5", img: "./public/kegiatan/6.jpeg" },
      { name: "5", img: "./public/kegiatan/7.jpeg" },
    ],
  },
  client_section: {
    title: "Tumbuh Bersama, Raih Masa Depan.",
    desc: "Didukung oleh dosen profesional, mahasiswa yang aktif dan beragam, serta alumni yang terus berkarya di berbagai bidang. Kami membangun lingkungan pendidikan yang mendorong setiap individu untuk berkembang, berprestasi, dan memberikan dampak positif.",
    banner: "/src/assets/images/banner/banner.jpg",
    caption: {
      caption1: {title: "Saatnya Jadi Bagian dari Dunia Digital", desc: "Kembangkan kemampuanmu di bidang teknologi, programming, dan inovasi bersama Program Studi Informatika. Belajar, berkarya, dan persiapkan dirimu untuk menghadapi masa depan digital."},
      caption2: {title: "Masa Depan Dimulai dari Kode Pertamamu", desc: "Punya minat di dunia teknologi? Wujudkan potensimu bersama Program Studi Informatika. Asah kemampuan, ciptakan inovasi, dan raih peluang karier di dunia digital."},
    },
    list: [
      { name: "204", desc: "Dibimbing oleh dosen ahli dan berpengalaman di bidangnya." },
      { name: "110", desc: "Tenaga Pendidik Berkualitas." },
      { name: "5,896", desc: "Komunitas mahasiswa yang aktif, kreatif, dan beragam." },
      { name: "11,017", desc: "Lulusan unggul yang siap berkontribusi bagi masyarakat." },
      { name: "23", desc: "Beragam Prodi, Satu Tujuan." },
      { name: "587", desc: "Publikasi & Karya Akademik." },
    ],
  },
};
