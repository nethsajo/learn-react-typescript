import { type ChangeEvent, useState } from 'react';

import { Item } from './Item';
import { type Item as ItemType } from './Item.types';
import { Wrapper } from './Wrapper';

type Props = {
  items: ItemType[];
  onPackItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
  onClearItems: () => void;
};

export function Items({ items, onPackItem, onDeleteItem, onClearItems }: Props) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  switch (sortBy) {
    case 'description':
      sortedItems = items.slice().sort((a, b) => a.item.localeCompare(b.item));
      break;
    case 'packed':
      sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <Wrapper classes="bg-yellow-900 py-8">
      {sortedItems.length > 0 ? (
        <div className="mb-8 flex justify-end space-x-4">
          <select
            name="quantity"
            value={sortBy}
            onChange={handleSort}
            className="w-full rounded-md border-none bg-amber-50 px-4 py-2 font-medium text-slate-600 outline-none transition duration-150 focus:ring-1 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent md:w-60"
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button
            onClick={onClearItems}
            className="rounded-md bg-amber-50 px-2 py-2 text-slate-600 outline-none transition duration-150 hover:bg-amber-100 hover:text-amber-500 focus:ring-1 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent"
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
              <path d="M11 12H3" />
              <path d="M16 6H3" />
              <path d="M16 18H3" />
              <path d="m19 10-4 4" />
              <path d="m15 10 4 4" />
            </svg>
          </button>
        </div>
      ) : null}

      {sortedItems.length > 0 ? (
        <div className="max-h-[440px] overflow-y-auto">
          <div className="flex flex-col space-y-4 text-amber-50">
            {sortedItems.map(item => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  onPackItem={onPackItem}
                  onDeleteItem={onDeleteItem}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-center text-slate-200">No items in your bag...</p>
      )}
    </Wrapper>
  );
}
