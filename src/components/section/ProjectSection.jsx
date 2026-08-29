import { useDeviceType } from "../../hooks/useDeviceType"
import { Navigation } from "swiper/modules";
import { Line } from "../Line"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

export default function ProjectSection({data}) {

    const {isMobile} = useDeviceType()

    if(isMobile){
      return (
        <section className='w-full py-10! relative border-b border-(--line)'>
          <div className='w-full flex justify-center items-center'>
            <div className='w-[70%]'>
              <h1>{data.title}</h1>
              <p className='text-xl'>{data.desc}</p>
            </div>
          </div>
          <div className='w-full'>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".next-button",
                prevEl: ".prev-button",
              }}
              className="mt-10!"
              spaceBetween={20}
              slidesPerView={1}
            >
              {data.list.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='w-60 h-70 m-auto! border border-(--line) rounded-2xl p-3!'>
                      {item.img == "" ? (
                        <div className='w-full h-full rounded-xl bg-cyan-200'>{item.name}</div>
                      ) : (
                        <img src={item.img} className='w-full h-full rounded-xl'/>
                      )}
                    </div>
                  </SwiperSlide> 
              ))}
                <div className="flex justify-center gap-8 mt-8!">
                  <button className="prev-button triangle -rotate-90"></button>
                  <button className="next-button triangle rotate-90"></button>
                </div>
            </Swiper>
          </div>
        </section>
      )
    }else{
      return(
        <section className='w-full h-[400vh] relative flex justify-center border-b border-(--line)'>
          <Line/>
          <div className='w-[60%] sticky top-0 h-screen flex justify-center items-center'>
            <div className='w-[70%]'>
              <h1>{data.title}</h1>
              <p className='text-2xl'>{data.desc}</p>
            </div>
          </div>
          <div className='w-[40%] h-full flex flex-col'>
            {data.list.map((item, index) => (
                <div key={index} className='w-80 h-90 m-auto! border border-(--line) rounded-3xl p-3!'>
                  {item.img == "" ? (
                    <div className='w-full h-full rounded-2xl bg-cyan-200'>{item.name}</div>
                  ) : (
                    <img src={item.img} className='w-full h-full rounded-2xl'/>
                  )}
                </div>
            ))}
          </div>
        </section>
      )
    }
}