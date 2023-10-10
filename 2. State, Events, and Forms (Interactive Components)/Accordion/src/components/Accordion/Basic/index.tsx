import { type FAQ } from '../types';
import { Basic } from './Basic';

type Props = {
  faqs: FAQ[];
};

export function AccordionBasic({ faqs }: Props) {
  return (
    <div className="flex flex-col space-y-6">
      {faqs.map(faq => (
        <Basic key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
