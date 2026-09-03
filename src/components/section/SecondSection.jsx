import { useRef } from "react";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import { Triangle } from "../Line";
import { useDeviceType } from "../../hooks/useDeviceType";

export default function SecondSection({ data }) {
  const section1 = useRef(null);
  const open = useSectionScroll(section1, 500);
  const { isMobile } = useDeviceType();

  if (isMobile) {
    return (
      <section ref={section1} id="tentang" className="relative w-full h-screen flex justify-center items-center px-6!">
        <Triangle style={"absolute rotate-180 left-1/2 top-0"} />

        {open && (
          <div className="w-full text-center">
            <p className="text-4xl font-bold from-bottom [--delay:500ms]">
              {data.main_title} <mark className="text-pink-500 bg-transparent">{data.marking_main_title}</mark>
            </p>

            <p className="text-xl text-(--text-sec-2) from-bottom mt-3!">{data.title}</p>

            <div className="flex justify-center mt-8! from-bottom [--delay:1s]">
              <p className="w-[90%] text-md leading-relaxed">{data.desc}</p>
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <section ref={section1} id="tentang" className="relative w-full h-screen flex justify-center items-center">
      <Triangle style={"absolute rotate-180 left-1/2 top-0"} />

      {open && (
        <div className="w-[70%] max-w-6xl text-center">
          <p className="text-6xl font-bold from-bottom [--delay:500ms]">
            {data.main_title} <mark className="text-pink-500 bg-transparent">{data.marking_main_title}</mark>
          </p>

          <p className="text-4xl text-(--text-sec-2) from-bottom mt-3!">{data.title}</p>

          <div className="flex justify-center mt-8! from-bottom [--delay:1s]">
            <p className="w-[60%] text-xl leading-relaxed">{data.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
