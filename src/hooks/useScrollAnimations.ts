import { useEffect } from "react";

/**
 * Global scroll animation hook using IntersectionObserver.
 * Add `data-animate="fade-up"` (or other variants) to any element.
 * Optional: `data-animate-delay="200"` for staggered delays (ms).
 * Optional: `data-animate-duration="800"` for custom duration (ms).
 * Optional: `data-animate-threshold="0.2"` for custom visibility threshold.
 */
const useScrollAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements.length) return;

    // Apply initial hidden state
    elements.forEach((el) => {
      el.classList.add("scroll-hidden");
      const delay = el.dataset.animateDelay;
      const duration = el.dataset.animateDuration;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      if (duration) el.style.transitionDuration = `${duration}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("scroll-visible");
            el.classList.remove("scroll-hidden");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Re-observe on route changes
  useEffect(() => {
    const handleMutation = () => {
      const newElements = document.querySelectorAll<HTMLElement>(
        "[data-animate]:not(.scroll-visible):not(.scroll-hidden)"
      );
      if (!newElements.length) return;

      newElements.forEach((el) => {
        el.classList.add("scroll-hidden");
        const delay = el.dataset.animateDelay;
        const duration = el.dataset.animateDuration;
        if (delay) el.style.transitionDelay = `${delay}ms`;
        if (duration) el.style.transitionDuration = `${duration}ms`;
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("scroll-visible");
              el.classList.remove("scroll-hidden");
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
      );

      newElements.forEach((el) => observer.observe(el));
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => mutationObserver.disconnect();
  }, []);
};

export default useScrollAnimations;
