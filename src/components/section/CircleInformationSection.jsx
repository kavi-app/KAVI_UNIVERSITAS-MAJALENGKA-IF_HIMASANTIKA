import { useEffect, useRef, useState } from "react";
import { Triangle } from "../Line";
import { useDeviceType } from "../../hooks/useDeviceType";

export default function CircleInformationSection({ data }) {
  const [angle, setAngle] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const maxScroll = sectionRef.current.offsetHeight - window.innerHeight;
      const currentScroll = Math.max(0, Math.min(maxScroll, -rect.top));
      const progress = currentScroll / maxScroll;
      const value = 1 + progress * 359;
      setAngle(Math.round(value));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  const { isMobile } = useDeviceType();

  const [activeCircle, setActiveCircle] = useState("A");
  useEffect(() => {
    const circle = data.list.find((circle, index) => {
      const itemAngle = (360 / data.list.length) * index;
      const rotate = (((-itemAngle - angle) % 360) + 360) % 360;
      return rotate >= 60 && rotate <= 100;
    });

    if (circle) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveCircle(circle.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [angle]);

  if (isMobile) {
    return (
      <section ref={sectionRef} className="w-full h-[400vh]">
        <div className="sticky top-0 h-screen border-(--line) border-b">
          <div className="w-full h-screen border-(--line) border-t">
            <div className="w-full h-[90%] relative border-(--line) border-b">
              <div className="flex justify-center items-center h-full">
                <div className="w-[80%]">
                  <h1>{data.title} anjay</h1>
                  <div>
                    {data.list.map((item) => {
                      if (item.title == activeCircle) {
                        return (
                          <p key={item.title} className="from-bottom [--delay:0ms] text-justify">
                            {item.value}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-screen absolute top-0 -z-1 overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 -right-100 w-150 h-150 rounded-full bg-white border border-(--line)">
              <div className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                {data.list.map((circle, index) => {
                  const itemAngle = (360 / data.list.length) * index;
                  const rotate = (((-itemAngle - angle) % 360) + 360) % 360;

                  return (
                    <div key={circle.title} className="absolute top-1/3 left-1/3" style={{ transform: `rotate(${itemAngle}deg) translateY(-300px)` }}>
                      <div
                        className={`bg-white ${rotate <= 100 && rotate >= 60 ? "w-60 h-60" : "w-50 h-50"} rounded-full border border-(--line) flex items-center justify-center transition-all ease-in-out`}
                        style={{ transform: `rotate(${-itemAngle - angle}deg)`, boxShadow: rotate <= 100 && rotate >= 60 && "var(--shadow)" }}
                      >
                        {`${circle.title}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section ref={sectionRef} className="w-full h-[400vh]">
        <div className="sticky top-0 h-screen flex justify-center items-center border-(--line) border-b">
          <div className="w-[50%] h-screen border-(--line) border-t border-r">
            <div className="w-full h-[90%] relative border-(--line) border-b">
              <div className="flex justify-center items-center h-full">
                <div className="w-[60%]">
                  <h1>{data.title}</h1>
                  <div>
                    {data.list.map((item) => {
                      if (item.title == activeCircle) {
                        return (
                          <p key={item.title} className="from-bottom [--delay:0ms] text-justify">
                            {item.value}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Triangle style={"absolute rotate-90 left-1/2"} />
          <div className="w-[50%] h-screen relative overflow-hidden">
            <div className="absolute top-50 -right-30 w-150 h-150 rounded-full bg-white border border-(--line)">
              <div className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                {data.list.map((circle, index) => {
                  const itemAngle = (360 / data.list.length) * index;
                  const rotate = (((-itemAngle - angle) % 360) + 360) % 360;

                  return (
                    <div key={circle.title} className="absolute top-1/3 left-1/3" style={{ transform: `rotate(${itemAngle}deg) translateY(-300px)` }}>
                      <div
                        className={`bg-white ${rotate <= 100 && rotate >= 60 ? "w-60 h-60" : "w-50 h-50"} rounded-full border border-(--line) flex items-center justify-center transition-all ease-in-out`}
                        style={{ transform: `rotate(${-itemAngle - angle}deg)`, boxShadow: rotate <= 100 && rotate >= 60 && "var(--shadow)" }}
                      >
                        {`${circle.title}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
