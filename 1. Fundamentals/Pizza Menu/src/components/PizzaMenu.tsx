import Header from 'components/Header';
import { MENUS } from 'shared/constants/menu';

import Footer from './Footer';
import Menus from './Menus';

export default function PizzaMenu() {
  return (
    <div className="mx-auto flex w-full flex-col items-center space-y-12 md:max-w-[50rem]">
      <Header title="Fast React Pizza Co." />
      <Menus menus={MENUS} />
      <Footer />
    </div>
  );
}
