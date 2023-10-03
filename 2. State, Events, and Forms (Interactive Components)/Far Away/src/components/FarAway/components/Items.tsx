import { type Item } from './Item.types';

type Props = {
  items: Item[];
};

export function Items({ items }: Props) {
  return (
    <div className="w-full bg-yellow-900 py-8">
      <div className="mx-auto max-w-2xl px-4">
        <div className="flex flex-wrap gap-8 text-amber-50">
          {items.map(item => {
            return (
              <div key={item.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`item__${item.id}`}
                  value={String(item.packed)}
                  className="h-5 w-5 rounded-sm border-slate-300 bg-transparent text-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-transparent"
                />
                <label htmlFor={`item__${item.id}`} className="text-base">
                  <span className="font-semibold">{item.quantity}</span> &mdash; {item.item}
                </label>
                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-amber-200 transition duration-300 hover:bg-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 fill-current"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
