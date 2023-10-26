import { type ChangeEvent, useState } from 'react';

import { type Friend } from '../types';

type Props = {
  friend: Friend;
};

export function Dialog({ friend }: Props) {
  const state = friend ? 'open' : 'closed';

  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [payee, setPayee] = useState('user');

  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
    setBill(+e.target.value);
  };

  const handleExpense = (e: ChangeEvent<HTMLInputElement>) => {
    setExpense(+e.target.value);
  };

  return (
    <div
      data-state={state}
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm"
      data-aria-hidden="true"
      aria-hidden="true"
    >
      <div
        role="dialog"
        data-state={state}
        className="fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-white p-6 shadow-lg duration-200 sm:max-w-[535px] sm:rounded-lg"
      >
        <h1 className="text-lg font-medium uppercase text-slate-600 sm:text-xl">
          Split a bill with <span className="font-bold text-blue-500">{friend.name}</span>
        </h1>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
            <label
              htmlFor="bill"
              className="text-left text-sm font-semibold sm:col-span-2 sm:text-right"
            >
              Bill Value
            </label>
            <input
              type="text"
              id="bill"
              value={bill}
              onChange={handleBill}
              className="h-8 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition duration-200 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
            <label
              htmlFor="bill"
              className="text-left text-sm font-semibold sm:col-span-2 sm:text-right"
            >
              Your expense
            </label>
            <input
              type="text"
              id="expense"
              value={expense}
              onChange={handleExpense}
              className="h-8 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition duration-200 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
            <label
              htmlFor="bill"
              className="text-left text-sm font-semibold sm:col-span-2 sm:text-right"
            >
              {friend.name}`s expense
            </label>
            <input
              disabled
              type="text"
              id="expense"
              value={expense}
              onChange={handleExpense}
              className="h-8 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition duration-200 disabled:cursor-not-allowed disabled:bg-gray-100 sm:col-span-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
