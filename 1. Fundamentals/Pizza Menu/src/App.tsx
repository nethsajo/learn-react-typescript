import Header from 'components/Header';
import Menus from 'components/Menus';
import React from 'react';
import { MENUS } from 'shared/constants/menu';

export default function App() {
  return (
    <div className="mx-auto flex w-full flex-col items-center space-y-12 md:max-w-[50rem]">
      <Header title="Fast React Pizza Co." />
      <Menus menus={MENUS} />
    </div>
  );
}
