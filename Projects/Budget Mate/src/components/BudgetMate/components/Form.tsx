import { Plus } from 'lucide-react';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Button } from 'shared/components/elements/button';
import Dialog from 'shared/components/elements/dialog';
import { Input } from 'shared/components/elements/input';

import { type Expense } from './types';

type Props = {
  onAddExpenses: (items: Expense[]) => void;
};

type InputProps = {
  id: string | number;
  name: string;
  value: string | number;
};

export function Form({ onAddExpenses }: Props) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Expense[]>([
    {
      id: crypto.randomUUID(),
      item: '',
      date: new Date().toISOString().slice(0, 10),
      cost: 0,
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = ({ id, name, value }: InputProps) => {
    setItems(currentItems =>
      currentItems.map(current => {
        if (current.id === id) {
          return { ...current, [name]: value };
        }

        return current;
      })
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddExpenses(items);
    handleClose();
    setItems([
      {
        id: crypto.randomUUID(),
        item: '',
        date: new Date().toISOString().slice(0, 10),
        cost: 0,
      },
    ]);
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

  const handleRemoveItem = (id: string | number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  return (
    <Dialog open={open} onOpen={handleOpen} onClose={handleClose}>
      <Dialog.Trigger>
        <Button size="lg" color="primary">
          Add
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Add Items</Dialog.Title>
          <Dialog.Description>
            Effortlessly track your expenses by providing the necessary details below. Accurate
            information ensures precise financial insights
          </Dialog.Description>
        </Dialog.Header>
        <form onSubmit={handleSubmit}>
          <div
            className={`mb-6 max-h-[350px] overflow-y-auto ${items.length > 1 ? 'pr-3' : 'pr-0'}`}
          >
            {items.map((expense, index) => {
              return (
                <div
                  key={expense.id}
                  className="mb-4 flex flex-col space-y-2 border-b pb-4 last:mb-0 last:border-b-0 last:pb-0"
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-6 sm:grid-rows-2">
                    <div className="col-span-3 row-span-1 sm:col-span-full">
                      <Input
                        label="Item"
                        id={`item--${expense.id}`}
                        value={expense.item}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange({
                            id: expense.id,
                            name: 'item',
                            value: e.target.value,
                          })
                        }
                        className="rounded-md py-2 shadow-sm"
                      />
                    </div>
                    <div className="col-span-3 row-span-2">
                      <Input
                        type="date"
                        label="Date"
                        id={`date--${expense.id}`}
                        value={expense.date}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange({
                            id: expense.id,
                            name: 'date',
                            value: e.target.value,
                          })
                        }
                        className="rounded-md py-2 shadow-sm"
                      />
                    </div>
                    <div className="col-span-3 row-span-2">
                      <Input
                        label="Cost"
                        id={`cost--${expense.id}`}
                        value={expense.cost}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange({
                            id: expense.id,
                            name: 'cost',
                            value: Number(e.target.value),
                          })
                        }
                        className="rounded-md py-2 shadow-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="self-end text-xs font-medium text-red-500 transition-colors hover:text-red-600 disabled:cursor-not-allowed disabled:text-red-400"
                    onClick={() => handleRemoveItem(expense.id)}
                    disabled={index === 0}
                  >
                    Remove
                  </button>
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
              <Plus className="h-4 w-4 stroke-current" />
              <span>Add</span>
            </Button>
          </div>
          <Dialog.Footer className="mt-6 sm:justify-start">
            <Button type="submit" size="lg">
              Submit
            </Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog>
  );
}
