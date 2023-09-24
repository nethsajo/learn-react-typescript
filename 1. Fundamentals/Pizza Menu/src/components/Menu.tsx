import React from 'react';

type Menu = {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  soldOut: boolean;
};

type Props = {
  menu: Menu[];
};

export default function Menu({ menu }: Props) {
  return (
    <main className="flex flex-col items-center space-y-10">
      <h2 className="border-y-2 border-neutral-800 py-2 text-3xl font-medium uppercase tracking-tight text-neutral-800">
        Our Menu
      </h2>
      <p className="mx-auto max-w-lg text-center tracking-wide text-neutral-500">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
        organic, all delicious.
      </p>
    </main>
  );
}
