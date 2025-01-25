import { type Menu } from '../types/menu';
import { MenuItem } from './menu-item';

type MenuListProp = {
  menus: Menu[];
};
export const MenuList = ({ menus }: MenuListProp) => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {menus.map(menu => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};
