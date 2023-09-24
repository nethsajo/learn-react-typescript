import Header from 'components/Header';
import Menu from 'components/Menu';
import React from 'react';
import { MENU } from 'shared/constants/menu';

export default function App() {
  return (
    <div className="mx-auto flex w-full max-w-[50rem] flex-col items-center space-y-12">
      <Header title="Fast React Pizza Co." />
      <Menu menu={MENU} />
    </div>
  );
}
