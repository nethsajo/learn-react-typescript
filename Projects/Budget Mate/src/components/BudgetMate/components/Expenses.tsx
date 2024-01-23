import { Tag, X } from 'lucide-react';
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
      <h2 className="mb-3 font-semibold text-slate-600">Spending Insights</h2>
      {expenses.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expenses.map(expense => {
            return (
              <div key={expense.id} className="relative rounded-md bg-white px-4 py-3 shadow-sm">
                <div className="space-y-2">
                  <p className="font-bold text-slate-600">{expense.item}</p>
                  <p className="text-sm text-slate-400">{formatDate(expense.date)}</p>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-blue-500 px-2 py-1 text-white">
                    <Tag className="h-4 w-4 stroke-current" />
                    <span className="text-xs font-medium ">
                      &#8369; {formatNumber(expense.cost)}
                    </span>
                  </div>
                </div>
                <button
                  className="absolute right-4 top-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-slate-500 transition-colors duration-300 hover:bg-gray-300 hover:text-slate-600 active:bg-gray-400"
                  onClick={() => onRemoveExpense(expense.id)}
                >
                  <X className="h-4 w-4 stroke-current" />
                </button>
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
