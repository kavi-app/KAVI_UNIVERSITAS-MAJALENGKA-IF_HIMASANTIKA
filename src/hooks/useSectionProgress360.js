import { useEffect, useState } from "react";

export function useSectionProgress360(
  sectionRef, direction
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const scrollDistance =
        rect.height - window.innerHeight;

      const currentScroll = -rect.top;

      const percentage =
        currentScroll / scrollDistance;

      const angle = percentage * direction;

      setProgress(
        Math.max(0, Math.min(direction, angle))
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRef]);

  return progress;
}