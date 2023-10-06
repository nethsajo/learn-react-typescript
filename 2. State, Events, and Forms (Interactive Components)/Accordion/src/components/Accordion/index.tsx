import type React from 'react';
import { useEffect, useRef, useState } from 'react';

export default function Accordion() {
  const [height, setHeight] = useState(0);
  const content = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (content.current) {
      setHeight(content.current.offsetHeight);
    }
  }, []);

  return (
    <div className="mx-auto mt-24 max-w-xl px-4 sm:px-6 md:max-w-2xl">
      <h1 className="mb-8 text-4xl font-extrabold tracking-[-2.5px] text-slate-700 sm:text-4xl md:text-5xl">
        Accordion Component
      </h1>
      <div className="flex space-y-6">
        <div className="flex-1">
          <div className="flex flex-col rounded-md bg-white px-6 shadow-md shadow-slate-600/10">
            <button className="flex flex-1 items-center justify-between py-4">
              <span className="font-medium text-slate-600">Is it accessible?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 fill-none stroke-current"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              ref={content}
              className="pb-4 pt-0 text-sm text-slate-400"
              style={
                {
                  '--accordion-content-height': 'var(--accordion-collapsible-content-height)',
                  '--accordion-collapsible-content-height': `${height}px`,
                } as React.CSSProperties
              }
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
