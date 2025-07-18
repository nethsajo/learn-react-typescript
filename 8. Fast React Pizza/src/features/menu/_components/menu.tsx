import { useLoaderData } from 'react-router-dom';
import { getMenusData } from '../_data/get-menus';
import { type Menu } from '../_types/menu';
import { MenuItem } from './menu-item';

const Menu = () => {
  const menus = useLoaderData() as unknown as Array<Menu>;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold text-zinc-900">Our Menu</h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-500">
            Select your pizza from our artisan selection, crafted with the finest ingredients
          </p>
        </div>
        <div className="grid justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map(menu => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const menusDataLoader = async () => {
  const menus = await getMenusData();
  return menus;
};

export default Menu;
