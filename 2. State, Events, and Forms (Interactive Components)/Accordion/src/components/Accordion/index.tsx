import type React from 'react';
import { useEffect, useRef, useState } from 'react';

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const content = useRef<HTMLDivElement | null>(null);

  const handleOpenAccordion = () => {
    setIsOpen(open => !open);
  }

  useEffect(() => {
    if (content.current) {
      setHeight(content.current.clientHeight);
    }
  }, []);

  const state = isOpen ? 'open' : 'closed';

  return (
    <div className="mx-auto my-24 max-w-xl px-4 sm:px-6 md:max-w-2xl">
      <h1 className="mb-8 text-3xl font-extrabold tracking-[-2.5px] text-slate-700 sm:text-4xl md:text-5xl">
        Accordion Component
      </h1>
      <div className="flex space-y-6">
        <div className="flex-1" data-state={state}>
          <div className="flex flex-col rounded-md bg-white px-4 sm:px-6 shadow-md shadow-slate-600/10" data-state={state}>
            <button className="flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-180" onClick={handleOpenAccordion} data-state={state} aria-expanded={isOpen}>
              <span className="font-medium text-slate-600 text-sm sm:text-base">Is it accessible?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 fill-none stroke-current transition-transform duration-200"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              ref={content}
              data-state={state}
              className="pb-4 pt-0 text-sm text-slate-400 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-all"
              style={
                {
                  '--accordion-content-height': 'var(--accordion-collapsible-content-height)',
                  '--accordion-collapsible-content-height': `${height}px`,
                } as React.CSSProperties
              }
              hidden={!isOpen}
            >
              Voluptatum dolore laudantium similique distinctio molestias facere fugiat! Quae,
              adipisci itaque id unde in asperiores similique quam sequi mollitia ipsa quibusdam
              facilis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
