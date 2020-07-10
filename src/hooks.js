import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (target, config) => {
  useEffect(() => {
    const defaultConfig = {
      duration: 1500,
      delay: 0,
      easing: "ease",
      scale: 1,
      mobile: false,
      interval: 125,
    };

    ScrollReveal().reveal(target, { ...defaultConfig, ...config });
  });
};
