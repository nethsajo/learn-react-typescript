import { type Menu } from './Menus.types';
import Pizza from './Pizza';

type Props = {
  menus: Menu[];
};

export default function Menus({ menus }: Props) {
  return (
    <main className="flex flex-col items-center space-y-10">
      <h2 className="border-y-2 border-neutral-800 py-2 text-2xl font-medium uppercase tracking-tight text-neutral-800 sm:text-3xl">
        Our Menu
      </h2>
      <p className="mx-auto max-w-lg text-center tracking-wide text-gray-400">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
        organic, all delicious.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {menus.map(menu => (
          <Pizza key={menu.id} menu={menu} />
        ))}
      </div>
    </main>
  );
}
