import { Button } from '@/components/ui/button';
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
      <div className="flex flex-col justify-between">
        <div
          className={`flex flex-col space-y-2 ${!menu.soldOut ? 'text-zinc-800' : 'text-zinc-500'}`}
        >
          <div className="flex items-center">
            <p className="flex-1 text-lg font-semibold sm:text-xl">{menu.name}</p>
            <p className="font-medium uppercase sm:text-base">
              {!menu.soldOut ? formatCurrency(menu.unitPrice) : 'Sold out'}
            </p>
          </div>
          <p className="capitalize text-zinc-500">{menu.ingredients.join(', ')}</p>
        </div>
        <Button
          className="w-min border-red-500 text-zinc-800 hover:bg-red-500 active:bg-red-600"
          variant="outline"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
