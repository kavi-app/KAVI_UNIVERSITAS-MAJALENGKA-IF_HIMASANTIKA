/* eslint-disable react-hooks/static-components */
import { useEffect, useRef } from "react";
import { useSectionProgress } from "../../hooks/useSectionProgress";
import { useDeviceType } from "../../hooks/useDeviceType";
import {
  GraduationCap,
  Search,
  Star,
  UserCircle,
} from "lucide-react";
import img from "../../assets/images/banner/banner.png";
import barcode from "../../assets/images/barcode/qr.jpg";

export default function ClientSection({ data }) {
  const section = useRef(null);
  const progress = useSectionProgress(section);
  const { isMobile } = useDeviceType();
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.buttonData = {
      type: "action",
      message: "Daftar Sekarang",
    };

    const handleClick = (e) => {
      const event = e.detail?.originalEvent;

      if (event) {
        event.preventDefault();
      }

      console.log("Click detected in hero area!", e.detail);
    };

    hero.addEventListener("duetClick", handleClick);

    return () => {
      hero.removeEventListener("duetClick", handleClick);
    };
  }, []);

  function Layer() {
    if (isMobile) {
      return (
        <>
          <div
            className="absolute inset-0 flex justify-between text-black bg-radial-[at_75%_25%] from-white via-red-100 to-red-700 via-75% border-b border-(--line)"
            style={{
              clipPath: `circle(${progress}% at 50% 50%)`,
            }}
          >
            <div className="w-full h-full mt-20! p-10!">
              <div className="w-full">
                <div>
                  <div
                    className="text-3xl text-center font-bold items-center flex justify-center text-[#df1a22]"
                    slot="heading"
                  >
                    AYO DAFTAR SEKARANG!
                  </div>
                  <div
                    slot="description"
                    className="text-md text-center justify-center items-center flex"
                  >
                    Saatnya Wujudkan Mimpi, Raih Masa Depan Gemilang
                  </div>
                </div>
                <h2 className="text-center  border-b border-(--line) p-3! m-2! font-bold text-2xl">
                  Jalur Pendaftaran
                </h2>
                <div className="w-full grid grid-cols-3 p-3! gap-3">
                  <div className="p-5! gap-3 flex flex-col text-center items-center justify-center text-white rounded-2xl bg-[#df1a22]">
                    <UserCircle className="w-5 h-5 shrink-0" />
                    <div flex flex-col>
                      <p className="font-bold">REGULER</p>
                      <p className="text-xs flex justify-items-start">
                        Seleksi Nilai Akademik
                      </p>
                    </div>
                  </div>
                  <div className="p-5! gap-3 flex flex-col text-center items-center justify-center text-white rounded-2xl bg-[#df1a22]">
                    <Star className="w-5 h-5 shrink-0" />
                    <div flex flex-col>
                      <p className="font-bold">PRESTASI</p>
                      <p className="text-xs flex justify-items-start">
                        Raih Prestasi, Raih Beasiswa
                      </p>
                    </div>
                  </div>
                  <div className="p-5! w-full gap-3 flex flex-col text-center items-center justify-center text-white rounded-2xl bg-[#df1a22]">
                    <GraduationCap className="w-5 h-5 shrink-0" />
                    <div flex flex-col>
                      <p className="font-bold">BEASISWA</p>
                      <p className="text-xs flex justify-items-start">
                        Tersedia Berbagai Pilihan Beasiswa
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-5!">

                <div className="absolute right-0 bottom-0 m-2! bg-white p-4! items-center justify-center flex rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-center p-4 text-center">
                      <img
                        src={barcode}
                        className="items-start w-25 h-25"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                      <p className="items-center text-md font-bold">
                        Informasi Pendaftaran
                      </p>
                      <div className="bg-gray-200 w-full h-10 rounded-2xl flex flex-row items-center justify-center gap-2">
                        <Search />
                        <a className=" text-xl " href="https://pmb.umc.ac.id">
                          pmb.umc.ac.id
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <img
                src={img}
                className="w-95 -left-18 scale-x-[-1] absolute bottom-0"
                alt=""
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className="absolute inset-0 flex justify-between text-black bg-radial-[at_75%_25%] from-white via-red-100 to-red-700 via-75% border-b border-(--line)"
            style={{
              clipPath: `circle(${progress}% at 50% 50%)`,
            }}
          >
            <div className="w-full h-full flex justify-end items-center p-10! pr-50!">
              <div className="w-full max-w-200">
                <div>
                  <div
                    className="text-5xl font-bold items-center flex justify-center text-[#df1a22]"
                    slot="heading"
                  >
                    AYO DAFTAR SEKARANG!
                  </div>
                  <div
                    slot="description"
                    className="text-2xl justify-center items-center flex"
                  >
                    Saatnya Wujudkan Mimpi, Raih Masa Depan Gemilang
                  </div>
                </div>
                <h2 className="text-center  border-b border-(--line) p-3! m-2! font-bold text-2xl">
                  Jalur Pendaftaran
                </h2>
                <div className="grid grid-cols-3 p-3! gap-3">
                  <div className="p-5! gap-3 flex flex-col text-center items-center justify-center text-white rounded-2xl bg-[#df1a22]">
                    <UserCircle className="w-12 h-12 shrink-0" />
                    <div flex flex-col>
                      <p className="font-bold">REGULER</p>
                      <p className=" flex justify-items-start">
                        Seleksi Nilai Akademik
                      </p>
                    </div>
                  </div>
                  <div className="p-5! gap-3 flex flex-col text-center items-center justify-center text-white rounded-2xl bg-[#df1a22]">
                    <Star className="w-12 h-12 shrink-0" />
                    <div flex flex-col>
                      <p className="font-bold">PRESTASI</p>
                      <p className=" flex justify-items-start">
                        Raih Prestasi, Raih Beasiswa
                      </p>
                    </div>
                  </div>
                  <div className="p-5! gap-3 flex flex-col text-center items-center justify-center text-white rounded-2xl bg-[#df1a22]">
                    <GraduationCap className="w-12 h-12 shrink-0" />
                    <div flex flex-col>
                      <p className="font-bold">BEASISWA</p>
                      <p className=" flex justify-items-start">
                        Tersedia Berbagai Pilihan Beasiswa
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-5!">

                <div className="bg-white p-4! items-center justify-center flex w-fit rounded-2xl">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col p-4 text-center">
                      <img
                        src={barcode}
                        className="items-start w-25 h-25"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                      <p className="items-center text-2xl font-bold">
                        Informasi Pendaftaran
                      </p>
                      <div className="bg-gray-200 w-full h-10 rounded-2xl flex flex-row items-center justify-center gap-2">
                        <Search />
                        <a className=" text-2xl " href="https://pmb.umc.ac.id">
                          pmb.umc.ac.id
                        </a>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                </div>
              </div>
              <img
                src={img}
                className="w-130 -left-18 scale-x-[-1] absolute bottom-0"
                alt=""
              />
            </div>
            <div className="flex items-end border-l border-(--line) pb-30! p-10! w-[30%]">
              <div className="mt-6">
                <h2 className="text-5xl font-bold mb-5!">
                  {data.caption.caption2.title}
                </h2>
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
                  <h3 className="text-sm border-t border-(--line) border-dashed pt-5!">
                    {item.desc}
                  </h3>
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
                <h2 className="text-[5rem]">{item.name}</h2>
                <h3 className="text-md border-t border-(--line) border-dashed pt-5!">
                  {item.desc}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
