import { useState } from 'react';

import { type FAQ } from '../types';
import { Controlled } from './Controlled';

type Props = {
  faqs: FAQ[];
};

export function AccordionControlled({ faqs }: Props) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="flex flex-col space-y-6">
      {faqs.map((faq, index) => (
        <Controlled
          key={faq.id}
          faq={faq}
          currentOpen={currentOpen}
          index={index}
          onOpen={setCurrentOpen}
        />
      ))}
    </div>
  );
}
