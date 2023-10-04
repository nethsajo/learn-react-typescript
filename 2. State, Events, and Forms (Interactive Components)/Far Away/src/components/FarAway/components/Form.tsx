import { type ChangeEvent, type FormEvent, useState } from 'react';

import { type Item } from './Item.types';
import { Wrapper } from './Wrapper';

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

    if (!item) return;

    onAddItem({ id: Number(new Date()), item, quantity, packed: false });

    setItem('');
    setQuantity(1);
  };

  return (
    <Wrapper classes="bg-amber-700 py-6">
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0">
        <h3 className="flex-1 text-center text-base text-amber-50 md:text-xl">
          What do you need for your trip?
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <select
              name="quantity"
              value={quantity}
              onChange={handleQuantity}
              className="w-full rounded-md border-none bg-amber-50 px-4 py-2 font-medium text-slate-600 outline-none transition duration-150 focus:ring-1 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent"
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
              className="w-full appearance-none rounded-md border-none bg-amber-50 px-4 py-2 text-slate-600 outline-none transition duration-150 placeholder:text-slate-500 focus:ring-1 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent lg:w-60"
              placeholder="Add item..."
            />
            <button
              type="submit"
              className="w-full rounded-md bg-teal-500 px-6 py-2 font-semibold text-emerald-50 transition duration-150 hover:bg-teal-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
