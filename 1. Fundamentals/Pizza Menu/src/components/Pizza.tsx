import React from 'react';
import { type Menu } from 'shared/constants/menu';

type Props = {
  menu: Menu;
};

export default function Pizza({ menu }: Props) {
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
}
