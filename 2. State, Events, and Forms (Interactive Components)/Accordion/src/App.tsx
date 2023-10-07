import Accordions from 'components/Accordion';
import { FAQS } from 'shared/constants/faqs';

export default function App() {
  return <Accordions faqs={FAQS} />;
}
