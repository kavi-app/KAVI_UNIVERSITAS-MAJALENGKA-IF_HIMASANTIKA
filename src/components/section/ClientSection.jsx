/* eslint-disable react-hooks/static-components */
import { useRef } from "react";
import { useSectionProgress } from "../../hooks/useSectionProgress";
import { useDeviceType } from "../../hooks/useDeviceType";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientSection({ data }) {
  const section = useRef(null);
  const progress = useSectionProgress(section);
  const { isMobile } = useDeviceType();

  function Layer() {
    if (isMobile) {
      return (
        <>
          <div
            className="grid grid-rows-3 top-0 inset-0 h-screen absolute text-black bg-white border-b border-(--line)"
            style={{
              clipPath: `circle(${progress}% at 50% 50%)`,
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
                    <ChevronRight />
                    <ChevronRight size={20} />
                  </div>
                  <h2 className="font-bold text-xl">TEST</h2>
                  <div className="flex items-center anim-float-right">
                    <ChevronLeft size={20} />
                    <ChevronLeft />
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
      );
    } else {
      return (
        <>
          <div
            className="absolute inset-0 flex justify-between text-black bg-white border-b border-(--line)"
            style={{
              clipPath: `circle(${progress}% at 50% 50%)`,
            }}
          >
            <div className="w-[70%] h-full flex flex-col justify-center items-center p-10!">
              <div className="w-full max-w-200">
                {/* Banner */}
                <div className="h-full flex items-center justify-center w-full">
                  <div className="w-full max-w-225 aspect-video overflow-hidden">
                    <img src={data.banner} alt="Banner" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <div className="flex justify-center items-center gap-3 mt-3">
                    <div className="flex items-center anim-float-left">
                      <ChevronRight />
                      <ChevronRight size={20} />
                    </div>

                    <a href="https://pmb.umc.ac.id/signup?_gl=1*xnlmgs*_ga*MTY1OTk2Njg1NC4xNzg4MDk2MTY0*_ga_PY3128CM52*czE3ODgzOTk3NzIkbzIkZzEkdDE3ODg0MDM4MTUkajYwJGwwJGgw">
                      <h2 className="font-bold text-xl">DAFTAR SEKARANG</h2>
                    </a>

                    <div className="flex items-center anim-float-right">
                      <ChevronLeft size={20} />
                      <ChevronLeft />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end border-l border-(--line) pb-30! p-10! w-[30%]">
              <div className="mt-6">
                <h1 className="text-left text-red-700 font-bold text-2xl">Ayo Daftar Sekarang!</h1>
                <h2 className="text-5xl font-bold mb-5!">{data.caption.caption2.title}</h2>
                <p>{data.caption.caption2.desc}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  if (isMobile) {
    return (
      <>
        <section className="w-full text-white mt-20!">
          <div className="h-10 flex justify-center items-end">
            <div className="w-[25%] h-4 bg-black"></div>
            <div className="w-[25%] h-2 bg-black"></div>
            <div className="w-[25%] h-8 bg-black"></div>
            <div className="w-[25%] h-5 bg-black"></div>
          </div>
          <div className="bg-black flex flex-col justify-between overflow-hidden">
            <div className="grid grid-cols p-10!">
              <h1>{data.title}</h1>
              <p className="text-xl">{data.desc}</p>
            </div>
          </div>
        </section>
        <section ref={section} className="w-full bg-black h-[300vh] text-white">
          <div className="w-full h-screen sticky top-0">
            <Layer />
            <div className="w-full grid grid-cols p-10!">
              {data.list.map((item, index) => (
                <div key={index} className="flex-1 p-5!">
                  <h2 className="text-[2rem]">{item.name}</h2>
                  <h3 className="text-sm border-t border-(--line) border-dashed pt-5!">{item.desc}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <section ref={section} className="w-full h-[300vh] text-white mt-20!">
        <div className="h-10 flex justify-center items-end">
          <div className="w-[25%] h-4 bg-black"></div>
          <div className="w-[25%] h-2 bg-black"></div>
          <div className="w-[25%] h-8 bg-black"></div>
          <div className="w-[25%] h-5 bg-black"></div>
        </div>
        <div className="bg-black h-screen sticky top-0 flex flex-col justify-between overflow-hidden">
          <div className="grid grid-cols-2 pt-20! p-10!">
            <h1>{data.title}</h1>
            <p className="text-2xl">{data.desc}</p>
          </div>
          <Layer />
          <div className={`grid-cols-6 w-full grid p-10!`}>
            {data.list.map((item, index) => (
              <div key={index} className="flex-1 p-5!">
                <h2 className="text-[4rem]">{item.name}</h2>
                <h3 className="text-md border-t border-(--line) border-dashed pt-5!">{item.desc}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
