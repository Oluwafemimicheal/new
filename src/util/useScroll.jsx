import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const defaultConfig = {
  distance: "60px",
  duration: 700,
  easing: "ease-out",
  interval: 200,
  reset: false,
};

export const useScroll = (refs, config = {}) => {
  useEffect(() => {
    const sr = ScrollReveal({ ...defaultConfig, ...config });

    refs.forEach((ref) => {
      if (ref.current) {
        sr.reveal(ref.current);
      }
    });

    return () => sr.destroy();
  }, [refs, config]);
};