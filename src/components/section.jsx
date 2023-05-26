import { Transition } from "@headlessui/react";

export function Section({ className, children }) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-all duration-[1000ms] ease-in-out"
      enterFrom="opacity-0 -translate-y-8"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <section
        className={`m-0 px-8 py-16 w-full text-sm sm:text-md ${className} lg:px-16`}
      >
        {children}
      </section>
    </Transition>
  );
}

export function SectionTitle({ children }) {
  return (
    <h3 className="text-xl font-light text-center mb-8 uppercase tracking-wider">
      {children}
    </h3>
  );
}

export function SectionSubtitle({ children }) {
  return <h4 className="text-xl font-normal mt-4 text-center">{children}</h4>;
}
