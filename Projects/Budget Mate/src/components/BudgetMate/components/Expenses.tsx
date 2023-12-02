import { Expense } from './types';

type Props = {
  expenses: Expense[];
};

export function Expenses({ expenses }: Props) {
  return (
    <div>
      <h2 className="mb-3 font-semibold text-slate-600">
        Your {expenses.length > 1 ? 'expenses' : 'expense'}
      </h2>
      {expenses.length > 0 ? (
        <div className="grid gap-4">
          {expenses.map(expense => {
            return (
              <div key={expense.id}>
                <span>{expense.item}</span>
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
