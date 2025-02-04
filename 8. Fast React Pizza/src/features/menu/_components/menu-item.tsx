import { formatCurrency } from '@/utils/format-currency';
import { type Menu } from '../_types/menu';

type MenuItemProp = {
  menu: Menu;
};

export const MenuItem = ({ menu }: MenuItemProp) => {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-6 lg:grid-cols-[10rem_1fr]">
      <img
        src={menu.imageUrl}
        alt={`${menu.name} photo`}
        className={`aspect-square w-full self-start rounded-md ${menu.soldOut && 'opacity-80 grayscale'}`}
      />
      <div
        className={`flex flex-col space-y-2 ${!menu.soldOut ? 'text-zinc-700' : 'text-zinc-500'}`}
      >
        <p className="text-lg font-semibold  md:text-xl">{menu.name}</p>
        <p className="capitalize text-zinc-500">{menu.ingredients.join(', ')}</p>
        <div className="">
          {!menu.soldOut ? <p>{formatCurrency(menu.unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </div>
  );
};
