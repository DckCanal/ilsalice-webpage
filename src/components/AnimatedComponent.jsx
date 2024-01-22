import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={
        inView
          ? "opacity-100 translate-y-0 transition-all duration-1000"
          : "opacity-0 translate-y-4"
      }
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
