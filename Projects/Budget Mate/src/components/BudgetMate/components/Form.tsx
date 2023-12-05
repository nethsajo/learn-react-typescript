import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from 'shared/components/elements/input';
import { Expense } from './types';
import { Button } from 'shared/components/elements/button';

type Props = {
  onAddExpense: (item: Expense) => void;
};

export function Form({ onAddExpense }: Props) {
  const [item, setItem] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState(0);

  const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!item || !date) return;

    onAddExpense({ id: crypto.randomUUID(), item, date, cost });

    setItem('');
    setDate('');
    setCost(0);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Input
          label="Item"
          id="item"
          value={item}
          onChange={handleItemChange}
          className="rounded-md bg-white py-2 shadow-sm"
        />
        <Input
          type="date"
          label="Date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="rounded-md bg-white py-2 shadow-sm"
        />
        <Input
          label="Cost"
          id="cost"
          value={cost}
          onChange={handleCostChange}
          className="rounded-md bg-white py-2 shadow-sm"
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="w-full sm:w-auto">
          Add
        </Button>
      </div>
    </form>
  );
}