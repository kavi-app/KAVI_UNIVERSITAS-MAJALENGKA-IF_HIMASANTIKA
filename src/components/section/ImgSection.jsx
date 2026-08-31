import { useEffect, useRef, useState } from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';

export default function ImgSection({data}) {

    const [ts, setTs] = useState(false)
    const { isMobile, isDesktop } = useDeviceType()

    function Image({name, img, desc,}) {
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
            <div ref={sectionRef} className={`w-full ${ isMobile ? 'h-[70vh]' : 'h-screen'}`}>
                <div className={`relative w-full ${isMobile ? 'h-full' : 'h-screen'} overflow-hidden`}>
                    <img src={img} className={`absolute w-full -translate-y-1/2 ${isMobile ? 'h-screen' : 'h-[200vh]'} ${ts ? 'opacity-50' : 'opacity-100'}`} alt="test" style={{
                        transform: `translateY(${scroll / 3}px)`
                    }} />
                    <div className='absolute left-1/2 -translate-x-1/2 w-[50%] h-screen border-x border-(--line)'></div>
                    
                    {isMobile && (
                        <div onMouseEnter={() => setTs(true)} onMouseLeave={() => setTs(false)} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='text-xl text-white mb-2!'>{name}</div>
                            {/* <div className='h-60 w-70 p-2! rounded-lg border border-(--line)'>
                                <div className='w-full h-full rounded-md bg-white'></div>
                            </div> */}
                            <div className='flex justify-end mt-2!'>
                                <p className='text-xs w-70 text-white'>{desc}</p>
                            </div>
                        </div>
                    )}

                    {isDesktop && (
                        <div onMouseEnter={() => setTs(true)} onMouseLeave={() => setTs(false)} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='text-2xl text-white font-bold mb-2!'>{name}</div>
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
                    <Image key={index} name={item.title} img={item.image} desc={item.desc}/>
                ))}
                { isDesktop && (<p className='work-title'>Work</p>)}
            </section>
        </>
    )
}