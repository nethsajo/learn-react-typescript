import { formatCurrency } from '@/utils/format-currency';
import { type Menu } from '../types/menu';

type MenuItemProp = {
  menu: Menu;
};

export const MenuItem = ({ menu }: MenuItemProp) => {
  return (
    <div className="flex flex-col">
      <img
        src={menu.imageUrl}
        alt={`${menu.name} photo`}
        className="w-full rounded-md object-cover"
      />
      <div className="flex w-full flex-col space-y-2">
        <p>{menu.name}</p>
        <p className="capitalize">{menu.ingredients.join(', ')}</p>
        <div>{!menu.soldOut ? <p>{formatCurrency(menu.unitPrice)}</p> : <p>Sold out</p>}</div>
      </div>
    </div>
  );
};
