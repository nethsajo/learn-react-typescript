import { FAQS } from 'shared/constants/faqs';

import { AccordionBasic } from './Basic';
import { AccordionControlled } from './Controlled';

export default function Accordions() {
  return (
    <div className="mx-auto my-24 max-w-xl px-4 sm:px-6 md:max-w-2xl">
      <h1 className="mb-8 text-3xl font-extrabold tracking-[-2.5px] text-slate-700 sm:text-4xl md:text-5xl">
        Accordion Component
      </h1>
      <div className="flex flex-col space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-teal-600">I. Basic</h2>
          <AccordionBasic faqs={FAQS} />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-teal-600">II. Controlled</h2>
          <AccordionControlled faqs={FAQS} />
        </div>
      </div>
    </div>
  );
}
