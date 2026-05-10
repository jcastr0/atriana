"use client";

import { useEffect, useRef } from "react";

// Exponential ease-out (quart) for premium feel
const EASE_OUT_QUART = "cubic-bezier(0.25, 1, 0.5, 1)";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll("[data-reveal]");
    if (children.length === 0) return;

    children.forEach((child) => {
      const htmlChild = child as HTMLElement;
      htmlChild.style.opacity = "0";
      htmlChild.style.transform = "translateY(24px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.revealDelay || "0";
            target.style.transition = `opacity 0.8s ${EASE_OUT_QUART} ${delay}ms, transform 0.8s ${EASE_OUT_QUART} ${delay}ms`;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "-30px" }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}
