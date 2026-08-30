/* eslint-disable react-hooks/static-components */
import { useRef } from "react"
import { useSectionProgress } from "../../hooks/useSectionProgress"
import { useDeviceType } from "../../hooks/useDeviceType"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ClientSection({data}) {

    const section = useRef(null)
    const progress = useSectionProgress(section)
    const { isMobile } = useDeviceType()

    function Layer() {
        if(isMobile){
            return (
                <>
                    <div className="top-0 inset-0 h-screen absolute text-black bg-white border-b border-(--line)"
                        style={{
                            clipPath: `circle(${progress}% at 50% 50%)`
                        }}
                    >
                        <div className="flex items-start border-r border-(--line) p-10!">
                            <div>
                                <h1>Class</h1>
                                <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque ratione nam! Iusto ea hic fuga earum dolor vel doloremque quas, ad, labore aliquam suscipit ipsum! Eligendi nisi et incidunt!</p>
                            </div>
                        </div>
                        <div className="flex items-end border-l border-(--line) p-10!">
                            <div>
                                <h1>Class</h1>
                                <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque ratione nam! Iusto ea hic fuga earum dolor vel doloremque quas, ad, labore aliquam suscipit ipsum! Eligendi nisi et incidunt!</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div className="absolute inset-0 flex justify-between text-black bg-white border-b border-(--line)"
                        style={{
                            clipPath: `circle(${progress}% at 50% 50%)`
                        }}
                    >
                        <div className="flex items-start border-r border-(--line) p-10!">
                            <div>
                                <h1>Class</h1>
                                <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque ratione nam! Iusto ea hic fuga earum dolor vel doloremque quas, ad, labore aliquam suscipit ipsum! Eligendi nisi et incidunt!</p>
                            </div>
                        </div>
                        <div className="h-full flex items-center">
                            <div>
                                <h1>Ayo Daftar sekarang!</h1>
                                <div className="flex justify-center items-center gap-3">
                                    <div className="flex items-center anim-float-left">
                                        <ChevronRight/>
                                        <ChevronRight size={20}/>
                                    </div>
                                    <h2 className="font-bold text-xl">TEST</h2>
                                    <div className="flex items-center anim-float-right">
                                        <ChevronLeft size={20}/>
                                        <ChevronLeft/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end border-l border-(--line) p-10!">
                            <div>
                                <h1>Class</h1>
                                <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque ratione nam! Iusto ea hic fuga earum dolor vel doloremque quas, ad, labore aliquam suscipit ipsum! Eligendi nisi et incidunt!</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    if(isMobile){
        return (
            <>
                <section className='w-full text-white mt-20!'>
                    <div className='h-10 flex justify-center items-end'>
                        <div className='w-[25%] h-4 bg-black'></div>
                        <div className='w-[25%] h-2 bg-black'></div>
                        <div className='w-[25%] h-8 bg-black'></div>
                        <div className='w-[25%] h-5 bg-black'></div>
                    </div>
                    <div className='bg-black flex flex-col justify-between overflow-hidden'>
                        <div className='grid grid-cols p-10!'>
                            <h1>{data.title}</h1>
                            <p className='text-xl'>{data.desc}</p>
                        </div>
                    </div>
                </section>
                <section ref={section} className='w-full bg-black h-[300vh] text-white'>
                    <div className="w-full h-screen sticky top-0">
                        <Layer/>
                        <div className='w-full grid grid-cols p-10!'>
                            {data.list.map((item, index) => (
                                <div key={index} className='flex-1 p-5!'>
                                    <h2 className='text-[5rem]'>{item.name}</h2>
                                    <h3 className='text-xl border-t border-(--line) border-dashed pt-5!'>{item.desc}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
    }else{
        return (
            <section ref={section} className='w-full h-[300vh] text-white mt-20!'>
                <div className='h-10 flex justify-center items-end'>
                    <div className='w-[25%] h-4 bg-black'></div>
                    <div className='w-[25%] h-2 bg-black'></div>
                    <div className='w-[25%] h-8 bg-black'></div>
                    <div className='w-[25%] h-5 bg-black'></div>
                </div>
                <div className='bg-black h-screen sticky top-0 flex flex-col justify-between overflow-hidden'>
                    <div className='grid grid-cols-2 p-10!'>
                        <h1>{data.title}</h1>
                        <p className='text-3xl'>{data.desc}</p>
                    </div>
                    <Layer/>
                    <div className={`grid-cols-3 w-full grid p-10!`}>
                        {data.list.map((item, index) => (
                            <div key={index} className='flex-1 p-5!'>
                                <h2 className='text-[8rem]'>{item.name}</h2>
                                <h3 className='text-2xl border-t border-(--line) border-dashed pt-5!'>{item.desc}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}