import { Button } from 'shared/components/elements/button';
import { Expense } from './types';

type Props = {
  expenses: Expense[];
  onRemoveExpense: (id: string | number) => void;
};

export function Expenses({ expenses, onRemoveExpense }: Props) {
  const formatDate = (date: string) => {
    const value = new Date(date);
    const month = value.toLocaleString('default', { month: 'long' });
    const day = value.toLocaleString('default', { day: 'numeric' });
    const year = value.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  return (
    <div>
      <h2 className="mb-3 font-semibold text-slate-600">
        Your {expenses.length > 1 ? 'expenses' : 'expense'}
      </h2>
      {expenses.length > 0 ? (
        <div className="grid gap-4">
          {expenses.map(expense => {
            return (
              <div key={expense.id} className="flex rounded-md bg-white px-4 py-2 shadow-sm">
                <div className="">
                  <p className="font-bold text-slate-600">{expense.item}</p>
                  <span className="text-sm text-slate-500">$ {expense.cost.toLocaleString()}</span>
                </div>
                <div className="ml-auto flex flex-col space-y-1">
                  <p className="text-sm text-slate-500">{formatDate(expense.date)}</p>
                  <Button
                    color="danger"
                    size="xs"
                    className="self-end"
                    onClick={() => onRemoveExpense(expense.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-sm text-slate-500">
          Currently, there are no recorded expenses. Start adding and track your expenses!
        </p>
      )}
    </div>
  );
}
