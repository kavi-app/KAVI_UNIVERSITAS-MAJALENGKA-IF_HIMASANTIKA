import { useEffect, useState } from "react";

export function useScrollInterval(sectionRef) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Posisi awal:
      // top content berada di bottom viewport
      const start = viewportHeight;

      // Posisi akhir:
      // bottom content berada di top viewport
      const end = -rect.height;

      // Total jarak scroll
      const distance = start - end;

      // Posisi content saat ini
      const current = start - rect.top;

      // Progress 0 - 100
      const percentage = (current / distance) * 100;

      // Batasi antara 1 - 100
      const result = Math.max(
        1,
        Math.min(100, percentage)
      );

      setProgress(result);
    };

    window.addEventListener("scroll", handleScroll);

    // Jalankan sekali ketika component pertama kali dibuat
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  return progress;
}