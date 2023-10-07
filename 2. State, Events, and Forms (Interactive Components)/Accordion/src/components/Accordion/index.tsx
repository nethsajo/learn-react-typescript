import { Accordion } from './Accordion';
import { type FAQ } from './types';

type Props = {
  faqs: FAQ[];
};

export default function Accordions({ faqs }: Props) {
  return (
    <div className="mx-auto my-24 max-w-xl px-4 sm:px-6 md:max-w-2xl">
      <h1 className="mb-8 text-3xl font-extrabold tracking-[-2.5px] text-slate-700 sm:text-4xl md:text-5xl">
        Accordion Component
      </h1>
      <div className="flex flex-col space-y-6">
        {faqs.map(faq => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}
