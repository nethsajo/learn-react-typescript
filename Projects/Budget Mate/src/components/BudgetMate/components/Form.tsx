import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from 'shared/components/elements/input';
import { Expense } from './types';

type Props = {
  onAddExpense: (item: Expense) => void;
};

export function Form({ onAddExpense }: Props) {
  const [item, setItem] = useState('');
  const [cost, setCost] = useState(0);

  const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // onAddExpense();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Item" id="item" value={item} onChange={handleItemChange} />
      <Input label="Cost" id="cost" value={cost} onChange={handleCostChange} />
    </form>
  );
}
