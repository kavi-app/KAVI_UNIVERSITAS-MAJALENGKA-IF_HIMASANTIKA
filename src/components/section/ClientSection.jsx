/* eslint-disable react-hooks/static-components */
import { useEffect, useRef } from "react"
import { useSectionProgress } from "../../hooks/useSectionProgress"
import { useDeviceType } from "../../hooks/useDeviceType"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ClientSection({data}) {

    const section = useRef(null)
    const progress = useSectionProgress(section)
    const { isMobile } = useDeviceType()
    const heroRef = useRef(null)

    useEffect(() => {
        const hero = heroRef.current
        if(!hero) return
        hero.buttonData = {
            type: "action",
            message: "Daftar Sekarang",
        }

        const handleClick = (e) => {
            const event = e.detail?.originalEvent

            if(event){
                event.preventDefault()
            }

            console.log("Click detected in hero area!", e.detail)
        }

        hero.addEventListener("duetClick", handleClick)

        return () => {
            hero.removeEventListener("duetClick", handleClick)
        }
        }, [])

    function Layer() {
        if(isMobile){
            return (
                <>
                    <div className="grid grid-rows-3 top-0 inset-0 h-screen absolute text-black bg-white border-b border-(--line)"
                        style={{
                            clipPath: `circle(${progress}% at 50% 50%)`
                        }}
                    >
                        <div className="border-b border-(--line) p-10!">
                            <div>
                                <h2 className="text-3xl font-bold mb-5!">{data.caption.caption1.title}</h2>
                                <p className="w-50 text-xs">{data.caption.caption1.desc}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-full">
                                <h2 className="text-center text-3xl font-bold mb-5!">Ayo Daftar sekarang!</h2>
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
                        <div className="flex items-end border-t border-(--line) p-10!">
                            <div>
                                <h2 className="text-3xl font-bold mb-5!">{data.caption.caption2.title}</h2>
                                <p className="w-50 text-xs">{data.caption.caption2.desc}</p>
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
                    <div className="w-[100%] h-full flex flex-col justify-center items-center p-10!">
                    <div className="w-full max-w-200">

        <duet-hero
                ref={heroRef}
                id="duet-hero_default_hero"
                description="Saatnya Wujudkan Mimpi, Raih Masa Depan Gemilang"
                button-label="Daftar Sekarang"
                button-url="/daftar"
            >
                <div
                className="text-5xl font-bold items-center flex justify-center text-red-700"
                slot="heading">AYO DAFTAR SEKARANG!
                </div>
                <div slot="description"
                    className="text-2xl justify-center items-center flex">
                    Saatnya Wujudkan Mimpi, Raih Masa Depan Gemilang
                </div>
        </duet-hero>

        <duet-grid responsive distribution="space-around" alignment="center">
            <duet-grid-item margin="none">
                <duet-icon size="x-large" background="category-family" name="category-personal"></duet-icon>
            </duet-grid-item>            
        </duet-grid>



        {/* CTA */}
        <div className="flex items-end border-1 border-(--line) pb-30! p-10! w-full">
            </div>
            <div className="flex justify-center items-center gap-3 mt-3">
            <div className="mt-6">



            </div>
        </div>

    </div>
</div>
                        <div className="flex items-end border-l border-(--line) pb-30! p-10! w-[30%]">
                            <div className="mt-6">
                                <h2 className="text-5xl font-bold mb-5!">{data.caption.caption2.title}</h2>
                                <p>{data.caption.caption2.desc}</p>
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
                                    <h2 className='text-[2rem]'>{item.name}</h2>
                                    <h3 className='text-sm border-t border-(--line) border-dashed pt-5!'>{item.desc}</h3>
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
                    <div className='grid grid-cols-2 pt-20! p-10!'>
                        <h1>{data.title}</h1>
                        <p className='text-2xl'>{data.desc}</p>
                    </div>
                    <Layer/>
                    <div className={`grid-cols-6 w-full grid p-10!`}>
                        {data.list.map((item, index) => (
                            <div key={index} className='flex-1 p-5!'>
                                <h2 className='text-[5rem]'>{item.name}</h2>
                                <h3 className='text-md border-t border-(--line) border-dashed pt-5!'>{item.desc}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}