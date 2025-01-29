import { useLoaderData } from 'react-router-dom';
import { getMenusData } from '../_data/get-menus';
import { type Menu } from '../_types/menu';
import { MenuItem } from './menu-item';

const Menu = () => {
  const menus = useLoaderData() as Array<Menu>;

  return (
    <div className="grid grid-cols-2 justify-center gap-6 md:grid-cols-3">
      {menus.map(menu => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export const menusDataLoader = async () => {
  const menus = await getMenusData();
  return menus;
};

export default Menu;
