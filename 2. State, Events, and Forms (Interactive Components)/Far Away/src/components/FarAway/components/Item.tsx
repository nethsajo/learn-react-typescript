import { type Item as ItemType } from './Item.types';

type Props = {
  item: ItemType;
  onPackItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

export function Item({ item, onPackItem, onDeleteItem }: Props) {
  return (
    <div className="flex justify-between rounded-md bg-yellow-800 px-4 py-3">
      <div className="grid flex-1 grid-cols-[24px_1fr] items-start justify-center gap-x-4">
        <input
          type="checkbox"
          id={`item__${item.id}`}
          value={String(item.packed)}
          onChange={() => onPackItem(item.id)}
          className="row-span-2 mt-1 h-6 w-6 rounded-sm border-slate-300 bg-transparent text-amber-600 transition duration-150 focus:ring focus:ring-amber-500 focus:ring-offset-1"
        />
        <label
          htmlFor={`item__${item.id}`}
          className="col-start-2 row-start-1 mb-1 font-medium leading-none sm:text-xl"
        >
          {item.item}
        </label>
        <p className="col-start-2 row-start-2 text-sm">x {item.quantity}</p>
      </div>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="mt-1 inline-flex self-start whitespace-nowrap rounded-md bg-transparent p-0.5 text-slate-200 transition duration-300 hover:bg-amber-600 active:bg-amber-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 fill-current"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
}
