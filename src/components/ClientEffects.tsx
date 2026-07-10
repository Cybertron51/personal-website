"use client";

import { useEffect } from "react";

export function ClientEffects() {
  useEffect(() => {
    if (!CSS.supports("animation-timeline", "scroll()")) {
      const reveals = document.querySelectorAll(".reveal");
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              el.style.transition =
                "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );

      reveals.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = "0";
        htmlEl.style.transform = "translateY(12px)";
        obs.observe(el);
      });

      return () => obs.disconnect();
    }
  }, []);

  return null;
}
