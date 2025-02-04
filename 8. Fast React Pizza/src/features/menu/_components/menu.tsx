import { useLoaderData } from 'react-router-dom';
import { getMenusData } from '../_data/get-menus';
import { type Menu } from '../_types/menu';
import { MenuItem } from './menu-item';

const Menu = () => {
  const menus = useLoaderData() as Array<Menu>;

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-xl font-bold text-zinc-900">Our Menu</h2>
      <div className="grid justify-center gap-12 md:grid-cols-2 xl:grid-cols-3">
        {menus.map(menu => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export const menusDataLoader = async () => {
  const menus = await getMenusData();
  return menus;
};

export default Menu;
