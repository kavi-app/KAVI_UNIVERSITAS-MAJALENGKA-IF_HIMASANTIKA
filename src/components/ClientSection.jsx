/* eslint-disable react-hooks/static-components */
import { useRef } from "react"
import { useSectionProgress } from "../hooks/useSectionProgress"

export default function ClientSection() {

    const section = useRef(null)
    const progress = useSectionProgress(section)
    // const rotate = useSectionProgress360(section, 180)

    function Layer() {
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
              <h1>Our Story in Stats.</h1>
              <p className='text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum unde laborum at repudiandae accusantium velit quisquam nesciunt totam eum nam, expedita optio voluptatem nemo temporibus dolor voluptatibus ab omnis iste.</p>
            </div>
            <Layer/>
            <div className='w-full grid grid-cols-3 p-10!'>
              <div className='flex-1 p-5!'>
                <h2 className='text-[10rem]'>9+</h2>
                <h3 className='text-3xl border-t border-(--line) border-dashed pt-5!'>Years of Expertise and Growth.</h3>
              </div>
              <div className='flex-1 p-5!'>
                <h2 className='text-[10rem]'>5</h2>
                <h3 className='text-3xl border-t border-(--line) border-dashed pt-5!'>Talented Minds Driving Innovation.</h3>
              </div>
              <div className='flex-1 p-5!'>
                <h2 className='text-[10rem]'>25+</h2>
                <h3 className='text-3xl border-t border-(--line) border-dashed pt-5!'>Thrilled Clients.</h3>
              </div>
            </div>
          </div>
        </section>
    )
}