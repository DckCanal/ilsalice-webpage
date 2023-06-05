"use client";
import { Transition } from "@headlessui/react";
import { useRef, useState, useEffect } from "react";

function StyledTransition({ children, props }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      {
        threshold: [0, 0.3],
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <Transition
      appear={true}
      show={isVisible}
      enter="transition-all duration-[2000ms] ease-in-out"
      {...props}
    >
      <div ref={elementRef}>{children}</div>
    </Transition>
  );
}

export function TransitionAbove({ children, props }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      {
        threshold: [0, 0.3],
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);
  return (
    <Transition
      appear={true}
      show={isVisible}
      enter="transition-all duration-[2000ms] ease-in-out"
      enterFrom="opacity-0 -translate-y-8"
      enterTo="opacity-100 translate-y-0"
      {...props}
    >
      {children}
    </Transition>
  );
}

export function TransitionLeft({ children, props }) {
  return (
    <StyledTransition
      // appear={true}
      // show={true}
      // enter="transition-all duration-[2000ms] ease-in-out"
      enterFrom="opacity-0 -translate-x-8"
      enterTo="opacity-100 translate-x-0"
      {...props}
    >
      {children}
    </StyledTransition>
  );
}

export function TransitionRight({ children, props }) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-all duration-[2000ms] ease-in-out"
      enterFrom="opacity-0 translate-x-8"
      enterTo="opacity-100 translate-x-0"
      {...props}
    >
      {children}
    </Transition>
  );
}

export const ElementWithTransition = ({ children }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      {
        threshold: [0, 0.3],
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    // <Transition
    //   appear={true}
    //   show={isVisible}
    //   unmount={false}
    //   enter="transition-all duration-[2000ms] ease-in-out"
    //   enterFrom="opacity-0 translate-y-10"
    //   enterTo="opacity-100 translate-y-0"
    //   leave="transition-opacity duration-500"
    //   leaveFrom="opacity-100"
    //   leaveTo="opacity-0"
    // >
    <div
      ref={elementRef}
      //className={isVisible ? "visible" : ""}
      style={{
        transition: "opacity 5s, transform 5s",
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
    //</Transition>
  );
};
