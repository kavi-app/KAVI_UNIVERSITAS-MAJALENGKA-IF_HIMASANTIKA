import './App.css'
import { useRef } from 'react';
import ReactLenis from 'lenis/react';
import Carousell from './components/Carousell';
import ProjectSection from './components/section/ProjectSection';
import ClientSection from './components/section/ClientSection';
import ImgSection from './components/section/ImgSection';
import { useDeviceType } from './hooks/useDeviceType';
import FirstSection from './components/section/FirstSection';
import { data } from './utils/data';
import SecondSection from './components/section/SecondSection';
import CircleInformationSection from './components/section/CircleInformationSection';
import PeopleInformationSection from './components/section/PeopleInformationSection';
import logo from './assets/logo/UMC-1.webp'

function App() {
  
  const mainRef = useRef(null)
  const {isMobile} = useDeviceType()

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
          <nav className="absolute top-0 left-0 w-full flex justify-between items-center justfy-between px-10 py-5">
            {/*Logo*/}         
              <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              </div>

            {/*Menu*/}
              <div className='hidden items-center gap-8 md:flex'>
              <a
                href="#home"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Home
              </a>

              <a
                href="#Tentang"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Tentang
              </a>

              <a
                href="#visi-misi"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Visi-Misi
              </a>

              <a
                href="#fasilitas"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Fasilitas
              </a>

              <a
                href="#kegiatan"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Kegiatan
              </a>
            </div>

            {/* Tombol daftar */}
            <div>
            <a
              href="#daftar"
              className="ml-4 rounded-lg bg-red-700 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              Daftar sekarang
            </a>
              </div>
            </nav>
          </header>

          <FirstSection data={data.first_section} />

          <SecondSection data={data.second_section} />

          <ImgSection data={data.img_section}/>

          {/* <section ref={section1} className='relative w-full h-screen flex justify-center items-center'>
            <Triangle style={"absolute rotate-180 left-1/2 top-0"}/>
            {open && (
              <div className='text-center'>
                <p className={cn(
                  "font-bold from-bottom [--delay:500ms]",
                  isMobile ? 
                    'text-4xl' : 
                    'text-8xl'
                  )
                }>
                  VISI & 
                <mark className='text-pink-500 bg-transparent'> MISI</mark></p>
                <p className={cn(isMobile ? 'text-4xl' : 'text-8xl', "font-bold from-bottom")}></p>
                <p className={cn(isMobile ? 'text-sm' : 'text-sm', "text-(--text-sec-2) from-bottom")}>Program Studi S1 Teknik Informatika</p>
                <div className='flex justify-center mt-10! from-bottom [--delay:1s]'>
                <p className={cn(isMobile ? 'text-2xl' : 'text-4xl', "font-bold")}>VISI</p>
                <p className={cn(isMobile ? 'text-md' : 'text-2xl', "w-[50%]")}>“Menjadi Program Studi yang Unggul dalam mencetak Tenaga terampil yang Islami dan Mandiri di Wilayah Jawa Barat pada tahun 2024”</p>
                </div>
              </div>  
            )}
          </section> */}

          {/* {title: "V", value: "Menanamkan nilai-nilai Islam kepada seluruh civitas akademika Program Studi S1 Teknik Informatika secara komperhensif."},
    {title: "IV", value: "Terselenggaranya pendidikan dan pengajaran yang berorientasi pada kompetensi bidang rekayasa teknologi yang sesuai dengan perkembangan kebutuhan dunia usaha dan industri."},
    {title: "III", value: "Terselenggaranya kegiatan penelitian dalam bidang rekayasa teknologi melalui kerjasama dengan pihak industri dan instansi pemerintahan baik dalam maupun luar negeri."},
    {title: "II", value: "Terselenggaranya kegiatan pengabdian kepada masyarakat dalam bidang rekayasa teknologi."},
    {title: "I", value: "Tumbuh kembangnya sikap kewirusahaan dalam bidang rekayasa teknologi di kalangan civitas akademika program Studi S1 Teknik Informatika."}, */}

          <CircleInformationSection data={data.circle_information_section} />

          <ClientSection data={data.client_section}/>

          <Carousell/>

          <PeopleInformationSection data={data.people_information_section} />

          <ProjectSection data={data.project_section} />

          <footer className='w-full bg-black h-100 text-white'>
            <p>World in hand</p>
          </footer>
      </main>
      </ReactLenis>
    </>
  )
}

export default App
