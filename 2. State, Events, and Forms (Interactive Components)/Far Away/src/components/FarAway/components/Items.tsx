import { type Item } from './Item.types';

type Props = {
  items: Item[];
};

export function Items({ items }: Props) {
  return (
    <div className="w-full bg-amber-900 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        {items.map(item => {
          return <div key={item.id}>{item.item}</div>;
        })}
      </div>
    </div>
  );
}
