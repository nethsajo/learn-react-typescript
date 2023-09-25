import React from 'react';
import { type Menu } from 'shared/constants/menu';

type Props = {
  menus: Menu[];
};

export default function Menu({ menus }: Props) {
  return (
    <main className="flex flex-col items-center space-y-10">
      <h2 className="border-y-2 border-neutral-800 py-2 text-2xl font-medium uppercase tracking-tight text-neutral-800 sm:text-3xl">
        Our Menu
      </h2>
      <p className="mx-auto max-w-lg text-center tracking-wide text-neutral-500">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
        organic, all delicious.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {menus.map(menu => {
          const soldout = menu.soldOut ? 'text-gray-500' : 'text-amber-700';

          return (
            <div className="flex gap-8" key={menu.id}>
              <img
                src={menu.image}
                alt={menu.name}
                className={`aspect-square w-28 self-start rounded-sm ${
                  menu.soldOut ? 'opacity-80 grayscale' : ''
                }`}
              />
              <div className="flex flex-col gap-2 py-1">
                <h2 className={`text-xl font-medium ${soldout}`}>{menu.name}</h2>
                <p className="mb-auto text-sm italic text-gray-500">{menu.ingredients}</p>
                <span className={`font-bold ${soldout}`}>
                  {menu.soldOut ? 'SOLD OUT' : `$ ${menu.price}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
