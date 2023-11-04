import React, {
  type ChangeEvent,
  type FormEvent,
  type Ref,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from 'shared/components/elements/button';
import { Input } from 'shared/components/elements/input';
import { Select } from 'shared/components/elements/select';

import { type Friend } from '../types';

type Props = {
  state: 'open' | 'closed';
  friend: Friend;
  onSplitBill: (bill: number) => void;
  onClose: () => void;
};

export const Dialog = React.forwardRef(
  ({ state, friend, onSplitBill, onClose }: Props, ref: Ref<HTMLDivElement>) => {
    const input = useRef<HTMLInputElement>(null);

    const [bill, setBill] = useState(0);
    const [expense, setExpense] = useState(0);
    const [payer, setPayer] = useState('user');

    const friendExpense = bill - expense;
    const paidByFriend = bill ? bill - expense : 0;

    const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
      setBill(+e.target.value);
    };

    const handleExpense = (e: ChangeEvent<HTMLInputElement>) => {
      setExpense(Number(e.target.value) > bill ? expense : Number(e.target.value));
    };

    const handlePayer = (e: ChangeEvent<HTMLSelectElement>) => {
      setPayer(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onSplitBill(payer === 'user' ? paidByFriend : -expense);
    };

    useEffect(() => {
      if (input.current) {
        input.current.focus();
      }
    }, []);

    return (
      <div
        ref={ref}
        role="dialog"
        data-state={state}
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-white px-4 py-8 shadow-lg duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-[525px] sm:rounded-lg sm:px-6"
      >
        <h1 className="text-lg font-semibold uppercase text-slate-600 sm:text-xl">
          Split a bill with <span className="font-bold text-blue-500">{friend.name}</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2">
            <Input ref={input} id="bill" label="Bill Value" value={bill} onChange={handleBill} />
            <Input id="my-expense" label="Your expense" value={expense} onChange={handleExpense} />
            <Input
              disabled
              id="friend-expense"
              label={`${friend.name}'s expense`}
              value={friendExpense}
            />
            <Select id="payer" label="Who is paying the bill?" value={payer} onChange={handlePayer}>
              <option value="user">You</option>
              <option value="friend">Friend</option>
            </Select>
          </div>
          <div className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button type="submit" color="primary" size="lg">
              Split
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
    );
  }
);
