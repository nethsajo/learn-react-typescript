import { type Item } from './Item.types';

type Props = {
  items: Item[];
};

export function Footer({ items }: Props) {
  const itemsCount = items.length;
  const itemsPacked = items.filter(item => item.packed).length;

  const percentage = +((itemsPacked / itemsCount) * 100).toFixed(2);

  return (
    <footer className="bg-teal-500 px-4 py-8">
      <p className="text-center text-base text-slate-50 sm:text-lg">
        {!itemsCount && 'Start adding some items to your packing list!'}
        {itemsCount > 0 &&
          percentage < 100 &&
          `You have ${itemsCount} ${
            itemsCount > 1 ? 'items' : 'item'
          } on your list, and you already packed ${itemsPacked} (${percentage}%)`}
        {percentage === 100 && 'You got everything! Ready to go ✈️'}
      </p>
    </footer>
  );
}
