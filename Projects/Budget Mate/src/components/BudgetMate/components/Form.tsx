import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Button } from 'shared/components/elements/button';
import Dialog from 'shared/components/elements/dialog';
import { Input } from 'shared/components/elements/input';

import { type Expense } from './types';

type Props = {
  onAddExpense: (item: Expense) => void;
};

export function Form({ onAddExpense }: Props) {
  const [item, setItem] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [cost, setCost] = useState(0);
  const [items, setItems] = useState<Expense[]>([
    {
      id: crypto.randomUUID(),
      item: '',
      date: new Date().toISOString().slice(0, 10),
      cost: 0,
    },
  ]);

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
    setDate(new Date().toISOString().slice(0, 10));
    setCost(0);
  };

  const handleAddItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      item: '',
      date: new Date().toISOString().slice(0, 10),
      cost: 0,
    };

    setItems(currentItems => [...currentItems, newItem]);
  };

  return (
    <Dialog>
      <Dialog.Trigger opens="add-item-form">
        <Button size="lg" color="primary">
          Add
        </Button>
      </Dialog.Trigger>
      <Dialog.Content name="add-item-form">
        <form onSubmit={handleSubmit}>
          <Dialog.Header>
            <Dialog.Title>Add Items</Dialog.Title>
            <Dialog.Description>
              Effortlessly track your expenses by providing the necessary details below. Accurate
              information ensures precise financial insights
            </Dialog.Description>
          </Dialog.Header>
          <div className="pb-4 pt-6">
            {items.map(expense => {
              return (
                <div
                  key={expense.id}
                  className="mb-4 grid grid-cols-1 gap-3 border-b pb-6 last:mb-0 last:border-b-0 last:pb-0 sm:grid-cols-3"
                >
                  <Input
                    label="Item"
                    id={`item--${expense.id}`}
                    value={expense.item}
                    onChange={handleItemChange}
                    className="rounded-md py-2 shadow-sm"
                  />
                  <Input
                    type="date"
                    label="Date"
                    id={`date--${expense.id}`}
                    value={expense.date}
                    onChange={handleDateChange}
                    className="rounded-md py-2 shadow-sm"
                  />
                  <Input
                    label="Cost"
                    id={`cost--${expense.id}`}
                    value={expense.cost}
                    onChange={handleCostChange}
                    className="rounded-md py-2 shadow-sm"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Button
              className="bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white"
              size="sm"
              onClick={handleAddItem}
            >
              + Add
            </Button>
          </div>
          <Dialog.Footer className="mt-6">
            <Button type="submit" size="xl">
              Submit
            </Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog>
  );
}
