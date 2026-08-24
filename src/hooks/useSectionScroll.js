import { useEffect, useState } from "react";

export function useSectionScroll(sectionRef, threshold = 500) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const top = sectionRef.current.getBoundingClientRect().top;

      setIsActive(top < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef, threshold]);

  return isActive;
}