import { useState } from 'react';

import { Balance } from './components/Balance';
import { Budget } from './components/Budget';
import { Spend } from './components/Spend';

type Expense = {
  id: number | string;
  name: string;
  cost: number;
};

export default function BudgetMate() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const spend = expenses.reduce(function (accumulator: number, expense: Expense) {
    return accumulator + expense.cost;
  }, 0);

  const balance = Math.abs(budget - spend);

  const onSetBudget = (value: number) => {
    setBudget(value);
  };

  const onAddExpense = (item: Expense) => {
    setExpenses(items => [...items, item]);
  };

  return (
    <div className="mx-auto mt-24 max-w-none px-4 sm:px-6 md:max-w-6xl">
      <h1 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-500 sm:text-4xl">
        Budget Mate
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <Budget budget={budget} onSetBudget={onSetBudget} />
        <Balance />
        <Spend />
      </div>
    </div>
  );
}
