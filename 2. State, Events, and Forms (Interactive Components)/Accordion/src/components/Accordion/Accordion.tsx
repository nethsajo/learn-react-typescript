import type React from 'react';
import { useEffect, useRef, useState } from 'react';

import { type FAQ } from './types';

type Props = {
  faq: FAQ;
};

export function Accordion({ faq }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const content = useRef<HTMLDivElement | null>(null);

  const handleToggleAccordion = () => {
    setIsOpen(open => !open);
  };

  useEffect(() => {
    if (content.current) {
      if (isOpen) {
        content.current.removeAttribute('hidden');
        setHeight(content.current.scrollHeight);
      } else {
        const timeout = setTimeout(() => {
          if (content.current) {
            if (!isOpen) {
              content.current.setAttribute('hidden', '');
            }
          }
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [isOpen]);

  const state = isOpen ? 'open' : 'closed';

  return (
    <div className="flex-1" data-state={state}>
      <div
        className="flex flex-col rounded-md bg-white px-4 shadow-[0_4px_10px_rgba(100,116,139,0.05)] sm:px-6"
        data-state={state}
      >
        <button
          className="flex flex-1 items-center justify-between py-4 transition-all [&[data-state=closed]>span]:text-slate-500 [&[data-state=open]>span]:text-teal-500 [&[data-state=open]>svg]:rotate-180"
          onClick={handleToggleAccordion}
          data-state={state}
          aria-expanded={isOpen}
        >
          <span className="text-left text-sm font-semibold transition-colors duration-200 sm:text-base">
            {faq.title}
          </span>
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
          hidden
          ref={content}
          data-state={state}
          className="overflow-hidden text-gray-400 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          style={
            {
              '--accordion-content-height': 'var(--accordion-collapsible-content-height)',
              '--accordion-collapsible-content-height': `${height}px`,
            } as React.CSSProperties
          }
        >
          {isOpen && <div className="pb-4 pt-0 text-sm">{faq.description}</div>}
        </div>
      </div>
    </div>
  );
}
