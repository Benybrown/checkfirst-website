"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Static-first atmosphere; no external renderer or hidden-content dependency. */
export function AuraBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const home = usePathname() === "/";
  useEffect(() => {
    const element = ref.current;
    if (!element || !home) return;
    let inView = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { element.dataset.animate = String(inView && !document.hidden && !motion.matches); };
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    return () => {
      observer.disconnect();
      element.dataset.animate = "false";
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", update);
    };
  }, [home]);
  return (
    <div ref={ref} className="vox-atmosphere" aria-hidden="true" data-home={home} data-animate="false">
      <div className="vox-plasma" />
      <div className="vox-slices">{Array.from({ length: 5 }, (_, i) => <div key={i} />)}</div>
    </div>
  );
}
