import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/format-currency';
import { type Menu } from '../_types/menu';

type MenuItemProp = {
  menu: Menu;
};

export const MenuItem = ({ menu }: MenuItemProp) => {
  return (
    <div className="shadow-xs overflow-hidden rounded-md bg-white ring-1 ring-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={menu.imageUrl}
        alt={`${menu.name} photo`}
        className={`aspect-square h-52 w-full object-cover object-center ${menu.soldOut && 'opacity-80 grayscale'}`}
      />
      <div className="px-6 py-4">
        <div className="flex flex-col space-y-2">
          <p className="flex-1 text-lg font-semibold sm:text-xl">{menu.name}</p>
          <p className="min-h-20 capitalize text-zinc-500">{menu.ingredients.join(', ')}</p>
        </div>
        <Button
          className={`w-full ${!menu.soldOut ? 'bg-red-500 hover:opacity-90' : 'bg-zinc-500'}`}
          disabled={menu.soldOut}
        >
          {!menu.soldOut ? `Add to Cart - ${formatCurrency(menu.unitPrice)}` : 'Sold out'}
        </Button>
      </div>
    </div>
  );
};
