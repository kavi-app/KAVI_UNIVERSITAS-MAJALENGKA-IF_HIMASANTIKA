import { useRef, useState } from "react";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import { Triangle } from "../Line";
import { useDeviceType } from "../../hooks/useDeviceType";
import img from "../../../public/kegiatan/1.jpeg"

export default function SecondSection({ data }) {
  const section1 = useRef(null);
  const open = useSectionScroll(section1, 500);
  const { isMobile } = useDeviceType();
  const count = isMobile ? 5 : 10

  function Line() {
    const [color, setColor] = useState(false)

    return (
      <div onMouseEnter={() => setColor(true)} onMouseLeave={() => setColor(false)} className={`w-full h-screen second`} style={{
        backgroundColor: color && 'transparent'
      }}></div>
    )
  }

  return (
  <section
    ref={section1}
    className="relative w-full h-screen flex justify-center items-center"
  >
    <Triangle style={"absolute rotate-180 left-1/2 top-0"} />

    {open && (
      <div className="relative z-10 text-center pointer-events-none">
        <p
          className={`${
            isMobile ? "text-4xl" : "text-6xl"
          } font-bold from-bottom [--delay:500ms]`}
        >
          {data.main_title}{" "}
          <mark className="text-pink-500 bg-transparent">
            {data.marking_main_title}
          </mark>
        </p>

        <p
          className={`${
            isMobile ? "text-xl" : "text-4xl"
          } text-(--text-sec-2) from-bottom`}
        >
          {data.title}
        </p>

        <div className="flex justify-center mt-8! from-bottom [--delay:1s]">
          <p className="text-md w-[50%]">
            {data.desc}
          </p>
        </div>
      </div>
    )}

    <div
      className={`absolute z-0 w-full overflow-hidden h-screen grid`}
      style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Line key={index} />
      ))}

      <img
        src={img}
        className={`${isMobile ? 'h-screen' : 'w-full'} absolute -z-1 grayscale-100 opacity-50`}
        alt=""
      />
    </div>
  </section>
);
}
