import './App.css'
import { useEffect, useRef, useState } from 'react';
import Section from './components/Section';
import ReactLenis from 'lenis/react';
import { useSectionScroll } from './hooks/useSectionScroll';
import Carousell from './components/Carousell';
import Section2 from './components/Section2';
import ProjectSection from './components/Project';
import { Triangle } from './components/Line';
import ClientSection from './components/ClientSection';
import ImgSection from './components/ImgSection';
import { useDevice } from './hooks/useDevice';

function App() {

  const [angle, setAngle] = useState(1);
  const sectionRef = useRef(null);
  const section1 = useRef(null)
  const open = useSectionScroll(section1, 500)
  const mainRef = useRef(null)
  const device = useDevice()

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const maxScroll = sectionRef.current.offsetHeight - window.innerHeight;
      const currentScroll = Math.max(0,Math.min(maxScroll, -rect.top));
      const progress = currentScroll / maxScroll;
      const value = 1 + progress * 359;
      setAngle(Math.round(value));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {window.removeEventListener("scroll", handleScroll);};
  }, [sectionRef]);

  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 2,
          smoothWheel: true,
          wheelMultiplier: 0.5,
        }}
      >
        <main ref={mainRef}>
          <section className='flex justify-center h-screen border-(--line) border-b'>
            <nav></nav>
            <div className='w-[80%] h-screen border-(--line) border-l border-r flex justify-center items-center'>
              <div>
                <div className="relative text-(--text)">
                  <div className='grad-circle [--grad-cr:rgba(255,0,132,0.3)]'></div>
                  <div className='flex'>
                    <p className="text-7xl lg:text-9xl from-top">KAVI.</p>
                    <p className="text-7xl lg:text-9xl from-left [--delay:300ms]">APP</p>
                  </div>
                  <div className="text-md px-2! flex justify-between lg:text-lg from-bottom [--delay:600ms]">
                    <p>Experiment</p>
                    <p>Experience</p>
                    <p>Expert</p>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-15! from-top [--delay:1s]">
                  <div className="bg-black rounded-full text-(--text-sec) py-2! px-10! text-xl font-bold">Scroll</div>
                </div>
              </div>
            </div>
          </section>

          <section ref={section1} className='relative w-full h-screen flex justify-center items-center'>
            <Triangle style={"absolute rotate-180 left-1/2 top-0"}/>
            {open && (
              <div className='text-center'>
                <p className={`${device === 'mobile' ? 'text-xl' : 'text-4xl'} text-(--text-sec-2) from-bottom`}>anjay keren banget bos</p>
                <p className={`${device === 'mobile' ? 'text-4xl' : 'text-8xl'} font-bold from-bottom [--delay:500ms]`}>Building Ideas Into <mark className='text-pink-500 bg-transparent'>Reality.</mark></p>
                <div className='flex justify-center mt-10! from-bottom [--delay:1s]'>
                  <p className={`${device === 'mobile' ? 'text-md' : 'text-2xl'} w-[50%]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus voluptate nihil officiis id ipsam eius dignissimos excepturi numquam.</p>
                </div>
              </div>
            )}
          </section>

          <Section sectionRef={sectionRef} angle={angle} />

          <Section2/>

          <ImgSection/>

          <ProjectSection/>

          <ClientSection/>

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
