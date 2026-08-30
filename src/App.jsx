import "./App.css";
import { useRef } from "react";
import ReactLenis from "lenis/react";

import Carousell from "./components/Carousell";
import ProjectSection from "./components/section/ProjectSection";
import ClientSection from "./components/section/ClientSection";
import ImgSection from "./components/section/ImgSection";
import { useDeviceType } from "./hooks/useDeviceType";
import FirstSection from "./components/section/FirstSection";
import { data } from "./utils/data";
import SecondSection from "./components/section/SecondSection";
import CircleInformationSection from "./components/section/CircleInformationSection";
import PeopleInformationSection from "./components/section/PeopleInformationSection";
import logo from "./assets/logo/UMC-1.webp";
import Footer from "./components/footer";

function App() {
  const mainRef = useRef(null);
  const { isMobile } = useDeviceType();

  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 2,
          smoothWheel: true,
          wheelMultiplier: isMobile ? 3 : 1,
        }}
      >
        <main ref={mainRef}>
          <header className="relative border-b border-(--line)">
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5">
              {/* LOGO */}
              <div className="flex items-center">
                <img src={logo} alt="Logo UMC" className="h-12 w-auto" />
              </div>

              {/* MENU */}
              <div className="hidden items-center gap-8 md:flex">
                <a href="#home" className="font-medium text-gray-700 transition hover:text-blue-600">
                  Home
                </a>

                <a href="#Tentang" className="font-medium text-gray-700 transition hover:text-blue-600">
                  Tentang
                </a>

                <a href="#visi-misi" className="font-medium text-gray-700 transition hover:text-blue-600">
                  Visi-Misi
                </a>

                <a href="#fasilitas" className="font-medium text-gray-700 transition hover:text-blue-600">
                  Fasilitas
                </a>

                <a href="#kegiatan" className="font-medium text-gray-700 transition hover:text-blue-600">
                  Kegiatan
                </a>
              </div>

              {/* TOMBOL DAFTAR */}
              <div>
                <a href="#daftar" className="ml-4 rounded-lg bg-red-700 px-5 py-2 text-white transition hover:bg-blue-700">
                  Daftar sekarang
                </a>
              </div>
            </nav>
          </header>
          <FirstSection data={data.first_section} />
          <SecondSection data={data.second_section} />
          <CircleInformationSection data={data.circle_information_section} />
          <ImgSection data={data.img_section} />
          <Carousell />

          <PeopleInformationSection data={data.people_information_section} />
          <ProjectSection data={data.project_section} />
          <ClientSection data={data.client_section} />
          <Footer />
        </main>
      </ReactLenis>
    </>
  );
}

export default App;
