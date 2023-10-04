import { Item } from './Item';
import { type Item as ItemType } from './Item.types';

type Props = {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
};

export function Items({ items, onDeleteItem }: Props) {
  return (
    <div className="w-full bg-yellow-900 py-8">
      <div className="max-h-[440px] max-w-2xl overflow-y-auto px-4 sm:mx-auto">
        <div className="flex flex-col space-y-4 text-amber-50">
          {items.map(item => {
            return <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />;
          })}
        </div>
      </div>
    </div>
  );
}
