import { type ChangeEvent, type FormEvent, useState } from 'react';

import { type Item } from './Item.types';

type Props = {
  onAddItem: (item: Item) => void;
};

export function Form({ onAddItem }: Props) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleItem = (e: ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const handleQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddItem({ id: Number(new Date()), item, quantity, packed: false });
  };

  return (
    <div className="flex flex-col justify-center space-y-4 bg-amber-700 px-4 py-6 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0">
      <h3 className="text-center text-base text-amber-50 md:text-xl">
        What do you need for your trip?
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <select
            name="quantity"
            value={quantity}
            onChange={handleQuantity}
            className="w-full rounded-md border-none bg-amber-50 px-4 py-2 font-medium outline-none"
          >
            {Array.from({ length: 20 }, (_, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="item"
            value={item}
            onChange={handleItem}
            className="w-full appearance-none rounded-md border-none bg-amber-50 px-4 py-2 text-amber-800 outline-none placeholder:text-slate-500 lg:w-60"
            placeholder="Add item..."
          />
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 px-6 py-2 font-semibold text-emerald-50"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
