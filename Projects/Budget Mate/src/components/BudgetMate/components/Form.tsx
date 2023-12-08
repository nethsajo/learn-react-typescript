import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Button } from 'shared/components/elements/button';
import Dialog from 'shared/components/elements/dialog';
import { Input } from 'shared/components/elements/input';
import { Plus } from 'lucide-react';
import { type Expense } from './types';

type Props = {
  onAddExpenses: (items: Expense[]) => void;
};

type InputProps = {
  id: string | number;
  name: string;
  value: string;
};

export function Form({ onAddExpenses }: Props) {
  const [items, setItems] = useState<Expense[]>([
    {
      id: crypto.randomUUID(),
      item: '',
      date: new Date().toISOString().slice(0, 10),
      cost: '0',
    },
  ]);

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
  };

  const handleAddItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      item: '',
      date: new Date().toISOString().slice(0, 10),
      cost: '',
    };

    setItems(currentItems => [...currentItems, newItem]);
  };

  return (
    <Dialog>
      <Dialog.Trigger>
        <Button size="lg" color="primary">
          Add
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
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
                  className="mb-4 grid grid-cols-1 gap-3 border-b pb-6 last:mb-0 last:border-b-0 last:pb-0 sm:grid-cols-4 sm:grid-rows-2"
                >
                  <div className="col-span-2 row-span-1 sm:col-span-full">
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
                  <div className="col-span-2 row-span-2">
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
                  <div className="col-span-2 row-span-2">
                    <Input
                      label="Cost"
                      id={`cost--${expense.id}`}
                      value={expense.cost}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange({
                          id: expense.id,
                          name: 'cost',
                          value: e.target.value,
                        })
                      }
                      className="rounded-md py-2 shadow-sm"
                    />
                  </div>
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
            <Button type="submit" size="xl">
              Submit
            </Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog>
  );
}
