import fikar from "../assets/images/people/5.png";
import septian from "../assets/images/people/1.png";
import roni from "../assets/images/people/4.png";

import img1 from "../assets/images/lab.jpg";
import img2 from "../assets/images/2.jpg";
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
  people_information_section: [
    { name: "Fikar M. Istiqlalulwathon", role: "Superman", ig: "@andkjsnd", img: fikar },
    { name: "Septian Triana", role: "Ketua", ig: "@andkjsnd", img: septian },
    { name: "Ade Roni Pratama", role: "Anggota", ig: "@andkjsnd", img: roni },

  ],
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
      image: img2,
      desc: "Area pembelajaran bagi mahasiswa untuk melakukan praktik perakitan hardware dan instalasi infrastruktur jaringan komputer secara langsung.",
    }
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
    title: "Our Story in Stats.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum unde laborum at repudiandae accusantium velit quisquam nesciunt totam eum nam, expedita optio voluptatem nemo temporibus dolor voluptatibus ab omnis iste.",
    list: [
      { name: "9+", desc: "Years of Expertise and Growth." },
      { name: "5", desc: "Talented Minds Driving Innovation." },
      { name: "25+", desc: "Thrilled Clients." },
    ],
  },
};
