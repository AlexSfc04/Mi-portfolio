// hooks/useInView.js
// Custom hook — fires once when the element enters the viewport.
// Usage: const [ref, isVisible] = useInView();

import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
