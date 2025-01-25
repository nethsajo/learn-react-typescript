import { formatCurrency } from '@/utils/format-currency';
import { type Menu } from '../types/menu';

type MenuItemProp = {
  menu: Menu;
};

export const MenuItem = ({ menu }: MenuItemProp) => {
  return (
    <div>
      <img src={menu.imageUrl} alt={`${menu.name} photo`} />
      <div>
        <p>{menu.name}</p>
        <p className="capitalize">{menu.ingredients.join(', ')}</p>
        <div>{!menu.soldOut ? <p>{formatCurrency(menu.unitPrice)}</p> : <p>Sold out</p>}</div>
      </div>
    </div>
  );
};
