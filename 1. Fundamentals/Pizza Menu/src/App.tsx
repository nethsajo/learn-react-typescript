import Header from 'components/Header';
import Menu from 'components/Menu';
import React from 'react';
import { MENUS } from 'shared/constants/menu';

export default function App() {
  return (
    <div className="mx-auto flex w-full flex-col items-center space-y-12 md:max-w-[50rem]">
      <Header title="Fast React Pizza Co." />
      <Menu menus={MENUS} />
    </div>
  );
}
