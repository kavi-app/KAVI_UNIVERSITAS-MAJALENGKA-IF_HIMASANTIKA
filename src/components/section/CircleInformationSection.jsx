import { useEffect, useRef, useState } from "react";
import { Triangle } from "../Line";
import { useDeviceType } from "../../hooks/useDeviceType";

function StepIndicator({ data, currentStep, onStepChange }) {
  const steps = [...data.list].reverse(); // urutan render dibalik biar sesuai urutan progres scroll

  return (
    <ol className="flex items-center w-full space-x-2">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.title}
            className={`flex items-center ${isLast ? "" : "w-full"} ${
              isLast
                ? ""
                : `after:content-[''] after:w-full after:h-1 after:border-b after:border-2 after:inline-block after:ms-1 after:rounded-full ${
                    isCompleted ? "after:border-brand-subtle" : "after:border-default"
                  }`
            }`}
          >
            <button
              type="button"
              onClick={() => onStepChange?.(index)}
              className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-10 lg:w-10 shrink-0 transition-colors duration-300 ${
                isCompleted
                  ? "bg-brand-softer text-fg-brand"
                  : isActive
                  ? "bg-brand-softer text-fg-brand ring-2 ring-brand-subtle"
                  : "bg-neutral-tertiary text-body"
              }`}
            >
              {/* {isCompleted ? (
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              ) : (
              )} */}
              <Icon size={20} />
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default function CircleInformationSection({ data }) {
  const [angle, setAngle] = useState(1);
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeCircle, setActiveCircle] = useState(data.list[0]?.title ?? "");

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

 useEffect(() => {
  const index = data.list.findIndex((circle, i) => {
    const itemAngle = (360 / data.list.length) * i;
    const rotate = (((-itemAngle - angle) % 360) + 360) % 360;
    return rotate >= 60 && rotate <= 100;
  });

  if (index !== -1) {
    // dibalik: karena index wheel turun seiring scroll maju,
    // sedangkan currentStep untuk indicator harus naik dari kiri ke kanan
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentStep(data.list.length - 1 - index);
    setActiveCircle(data.list[index].title);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [angle]);

  // klik step -> scroll ke posisi yang sesuai, bukan langsung ubah state
  const scrollToStep = (index) => {
    if (!sectionRef.current) return;
    const maxScroll = sectionRef.current.offsetHeight - window.innerHeight;
    const progress = index / (data.list.length - 1);
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    window.scrollTo({
      top: sectionTop + progress * maxScroll,
      behavior: "smooth",
    });
  };

  if (isMobile) {
    return (
      <section ref={sectionRef} className="w-full h-[400vh]">
        <div className="sticky top-0 h-screen border-(--line) border-b">
          <div className="w-full h-screen border-(--line) border-t">
            <div className="w-full h-[90%] relative border-(--line) border-b">
              <div className="flex justify-center items-center h-fit mt-16!">
                <div className="w-[80%]">
                  <h1 className="my-2!">{data.title}</h1>
                  <div className="text-md">{data.desc}</div>
                </div>
              </div>
              <div className="flex justify-center h-1/2">
                <div className="w-[80%]">
                  <h1 className="my-2!">{data.title2}</h1>

                  <StepIndicator
                    data={data}
                    currentStep={currentStep}
                    onStepChange={scrollToStep}
                  />

                  <div className="mt-2!">
                    {data.list.map((item) => {
                      if (item.title == activeCircle) {
                        return (
                          <p key={item.title} className="from-bottom [--delay:0ms] text-justify text-md">
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
        </div>
      </section>
    );
  } else {
    return (
      <section ref={sectionRef} className="w-full h-[400vh]">
        <div className="sticky top-0 h-screen flex justify-center items-end border-(--line) border-b">
          <div className="w-[50%] h-screen border-(--line) border-t border-r">
            <div className="w-full h-[90%] relative border-(--line) border-b">
              <div className="flex justify-center items-center h-1/2">
                <div className="w-[60%]">
                  <h1>{data.title}</h1>
                  <div className="text-2xl">{data.desc}</div>
                </div>
              </div>
              <div className="flex justify-center h-1/2">
                <div className="w-[60%]">
                  <h1>{data.title2}</h1>
                  <div>
                    {data.list.map((item) => {
                      if (item.title == activeCircle) {
                        return (
                          <p key={item.title} className="from-bottom [--delay:0ms] text-2xl text-justify">
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
          <Triangle style={"absolute rotate-90 left-1/2 top-1/2"} />
          <div className="w-[50%] h-screen relative overflow-hidden">
            <div className="absolute top-50 -right-30 w-150 h-150 rounded-full bg-white border border-(--line)">
              <div className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                {data.list.map((circle, index) => {
                  const itemAngle = (360 / data.list.length) * index;
                  const rotate = (((-itemAngle - angle) % 360) + 360) % 360;
                  const Icon = circle.icon

                  return (
                    <div key={circle.title} className="absolute top-1/3 left-1/3" style={{ transform: `rotate(${itemAngle}deg) translateY(-300px)` }}>
                      <div
                        className={`bg-white ${rotate <= 100 && rotate >= 60 ? "w-60 h-60" : "w-50 h-50 text-(--line)"} rounded-full border border-(--line) flex items-center justify-center transition-all ease-in-out`}
                        style={{ transform: `rotate(${-itemAngle - angle}deg)`, boxShadow: rotate <= 100 && rotate >= 60 && "var(--shadow)" }}
                      >
                        <Icon size={60} />
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
