import { Button } from 'shared/components/elements/button';
import { formatNumber } from 'shared/utils/commons';

import { type Expense } from './types';

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
    <>
      <h2 className="mb-3 font-semibold text-slate-600">
        Your {expenses.length > 1 ? 'expenses' : 'expense'}
      </h2>
      {expenses.length > 0 ? (
        <div className="grid gap-4">
          {expenses.map(expense => {
            return (
              <div key={expense.id} className="flex rounded-md bg-white px-4 py-2 shadow-sm">
                <div className="grid w-full grid-cols-2 items-center gap-2 sm:grid-cols-[auto_1fr_auto_auto]">
                  <p className="font-bold text-slate-600">{expense.item}</p>
                  <span className="text-sm">{formatDate(expense.date)}</span>
                  <span className="text-sm font-medium text-slate-500">
                    &#8369; {formatNumber(expense.cost)}
                  </span>
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
    </>
  );
}
