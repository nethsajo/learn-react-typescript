import { type ChangeEvent, useState } from 'react';

import { Balance } from './components/Balance';
import { Budget } from './components/Budget';
import { Spend } from './components/Spend';
import { Form } from './components/Form';
import { Expense } from './components/types';
import { Expenses } from './components/Expenses';

export default function BudgetMate() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const spend = expenses.reduce(function (accumulator: number, expense: Expense) {
    return accumulator + expense.cost;
  }, 0);

  const balance = Math.abs(budget - spend);

  const onAddExpense = (item: Expense) => {
    setExpenses(items => [...items, item]);
  };

  const handleBudget = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  return (
    <div className="mx-auto mt-24 max-w-none px-4 sm:px-6 md:max-w-6xl">
      <h1 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-500 sm:text-4xl">
        Budget Mate
      </h1>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <Budget budget={budget} onSetBudget={handleBudget} />
        <Balance balance={balance} />
        <Spend spend={spend} />
      </div>
      <Form onAddExpense={onAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}
