import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Button } from 'shared/components/elements/button';

import { type Friend } from '../types';

type Props = {
  friend: Friend;
  onSplitBill: (bill: number) => void;
  onClose: () => void;
};

export function Dialog({ friend, onClose }: Props) {
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

  const handlePayee = (e: ChangeEvent<HTMLSelectElement>) => {
    setPayee(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const friendExpense = bill - expense;

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
        className="fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-white p-6 shadow-lg duration-200 sm:max-w-[525px] sm:rounded-lg"
      >
        <h1 className="text-lg font-semibold uppercase text-slate-600 sm:text-xl">
          Split a bill with <span className="font-bold text-blue-500">{friend.name}</span>
        </h1>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
            <label
              htmlFor="bill"
              className="text-left text-sm font-medium sm:col-span-2 sm:text-right"
            >
              Bill Value
            </label>
            <input
              type="number"
              id="bill"
              value={bill}
              onChange={handleBill}
              className="h-9 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition duration-200 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
            <label
              htmlFor="bill"
              className="text-left text-sm font-medium sm:col-span-2 sm:text-right"
            >
              Your expense
            </label>
            <input
              type="number"
              id="expense"
              value={expense}
              onChange={handleExpense}
              className="h-9 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition duration-200 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
            <label
              htmlFor="bill"
              className="text-left text-sm font-medium sm:col-span-2 sm:text-right"
            >
              {friend.name}`s expense
            </label>
            <input
              disabled
              type="text"
              id="expense"
              value={friendExpense}
              className="h-9 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition duration-200 disabled:cursor-not-allowed disabled:bg-gray-100 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
            <label
              htmlFor="bill"
              className="text-left text-sm font-medium sm:col-span-2 sm:text-right"
            >
              Who is paying the bill?
            </label>
            <select
              value={payee}
              onChange={handlePayee}
              className="h-9 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition duration-200 sm:col-span-3"
            >
              <option value="user">You</option>
              <option value="friend">Friend</option>
            </select>
          </div>
          <div className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button type="submit" color="primary" size="xl">
              Save changes
            </Button>
          </div>
        </form>
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-slate-300 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 disabled:pointer-events-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 fill-none stroke-current stroke-2"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
