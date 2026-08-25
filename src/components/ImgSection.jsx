import { useEffect, useRef, useState } from 'react';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import { useDevice } from '../hooks/useDevice';

export default function ImgSection() {

    const data = [
        {name: "TENTANG", image: img1, desc: "Program Studi S1 Teknik Informatika Universitas Muhammadiyah Cirebon (UMC) adalah institusi pendidikan tinggi yang berdedikasi untuk mencetak lulusan unggul, inovatif, dan berakhlak mulia di bidang teknologi informasi. Kami membekali mahasiswa dengan keahlian praktis dan teoretis yang relevan dengan kebutuhan industri digital masa kini.."},
        {name: "ASADAD", image: img2, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."},
    ]
    const [ts, setTs] = useState(false)
    const device = useDevice()

    function Image({name, img, desc}) {
        const sectionRef = useRef(null)
        const [scroll, setScroll] = useState(1);

        useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Jarak sejak top section menyentuh bottom viewport
            const currentScroll = viewportHeight - rect.top;

            setScroll(Math.max(1, currentScroll));
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);

        return (
            <div ref={sectionRef} className={`w-full ${device === 'mobile' ? 'h-[70vh]' : 'h-screen'}`}>
                <div className={`relative w-full ${device === 'mobile' ? 'h-full' : 'h-screen'} overflow-hidden`}>
                    <img src={img} className={`absolute w-full -translate-y-1/2 ${device === 'mobile' ? 'h-screen' : 'h-[200vh]'} ${ts ? 'opacity-50' : 'opacity-100'}`} alt="test" style={{
                        transform: `translateY(${scroll / 3}px)`
                    }} />
                    <div className='absolute left-1/2 -translate-x-1/2 w-[50%] h-screen border-x border-(--line)'></div>
                    {device === 'mobile' ? (
                        <div onMouseEnter={() => setTs(true)} onMouseLeave={() => setTs(false)} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='text-xl text-white mb-2!'>{name}</div>
                            <div className='h-60 w-70 p-2! rounded-lg border border-(--line)'>
                                <div className='w-full h-full rounded-md bg-white'></div>
                            </div>
                            <div className='flex justify-end mt-2!'>
                                <p className='text-xs w-70 text-white'>{desc}</p>
                            </div>
                        </div>
                    ) : (
                        <div onMouseEnter={() => setTs(true)} onMouseLeave={() => setTs(false)} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='text-2xl text-white mb-2!'>{name}</div>
                            {/* <div className='h-100 w-150 p-2! rounded-lg border border-(--line)'>
                                <div className='w-full h-full rounded-md bg-white'></div>
                            </div> */}
                            <div className='flex justify-end mt-2!'>
                                <p className='w-100 text-white'>{desc}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <>
            <section className='bg-black'>
                {data.map((item, index) => (
                    <Image key={index} name={item.name} img={item.image} desc={item.desc}/>
                ))}
                <p className='work-title'>Work</p>
            </section>
        </>
    )
}