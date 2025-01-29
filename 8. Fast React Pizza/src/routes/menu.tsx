import { MenuList } from '@/features/menu/components/menu-list';
import { getMenusData } from '@/features/menu/data/get-menus';
import { type Menu } from '@/features/menu/types/menu';
import { useLoaderData } from 'react-router-dom';

const MenuPage = () => {
  const menus = useLoaderData() as Array<Menu>;

  return <MenuList menus={menus} />;
};

export const menusDataLoader = async () => {
  const menus = await getMenusData();
  return menus;
};

export default MenuPage;
