import { type Menu } from './Menus.types';

type Props = {
  menu: Menu;
};

export default function Pizza({ menu }: Props) {
  const soldout = menu.soldOut ? 'text-gray-500' : 'text-amber-600';

  return (
    <div className="flex space-x-4" key={menu.id}>
      <img
        src={menu.image}
        alt={menu.name}
        className={`aspect-square w-28 self-start rounded-sm ${
          menu.soldOut ? 'opacity-80 grayscale' : ''
        }`}
      />
      <div className="flex flex-col space-y-2">
        <h2 className={`text-xl font-semibold ${soldout}`}>{menu.name}</h2>
        <p className="mb-auto text-sm tracking-tight text-gray-400">{menu.ingredients}</p>
        <span className={`font-bold ${soldout}`}>
          {menu.soldOut ? 'SOLD OUT' : `$ ${menu.price}`}
        </span>
      </div>
    </div>
  );
}
