import { useRef } from "react";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import { Triangle } from "../Line";
import { useDeviceType } from "../../hooks/useDeviceType";

export default function SecondSection({ data }) {
  const section1 = useRef(null);
  const open = useSectionScroll(section1, 500);
  const { isMobile } = useDeviceType();

  return (
    <section id="tentang" ref={section1} className="relative w-full h-screen flex justify-center items-center">
      <Triangle style={"absolute rotate-180 left-1/2 top-0"} />
      {open && (
        <div className="text-center">
          <p className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold from-bottom [--delay:500ms]`}>
            {data.main_title} <mark className="text-pink-500 bg-transparent">{data.marking_main_title}</mark>
          </p>
          <p className={`${isMobile ? "text-xl" : "text-4xl"} text-(--text-sec-2) from-bottom`}>{data.title}</p>
          <div className="flex justify-center mt-8! from-bottom [--delay:1s]">
            <p className={`${isMobile ? "text-md" : "text-md"} w-[50%]`}>{data.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
