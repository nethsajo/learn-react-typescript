import { getMenusData } from '@/features/menu/data/get-menus';
import { type Menu } from '@/features/menu/types/menu';
import { useLoaderData } from 'react-router-dom';

const MenuPage = () => {
  const menus = useLoaderData() as Array<Menu>;

  return (
    <ul>
      {menus.map(menu => (
        <div key={menu.id}>{menu.name}</div>
      ))}
    </ul>
  );
};

export const getMenusDataLoader = async () => {
  const menus = await getMenusData();
  return menus;
};

export default MenuPage;
