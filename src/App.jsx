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
          
          <FirstSection data={data.first_section}/>

          <SecondSection data={data.second_section} />

          <CircleInformationSection data={data.circle_information_section} />

          <PeopleInformationSection data={data.people_information_section}/>

          <ImgSection data={data.img_section}/>

          <ProjectSection data={data.project_section}/>

          <ClientSection data={data.client_section}/>

          <Carousell/>

          <footer className='w-full bg-black h-100 text-white'>
            <p>World in hand</p>
          </footer>
        </main>
      </ReactLenis>
    </>
  )
}

export default App
