import { useEffect, useState } from "react";

export function useSectionProgress(
  sectionRef
) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrollDistance = sectionHeight - viewportHeight;

      if (scrollDistance <= 0) {
        setProgress(100);
        return;
      }

      const currentScroll = -rect.top;

      const percentage =
        (currentScroll / scrollDistance) * 100;

      setProgress(
        Math.max(1, Math.min(100, percentage))
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  return progress;
}