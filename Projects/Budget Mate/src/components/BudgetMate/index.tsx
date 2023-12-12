import { useState } from 'react';

import { Balance } from './components/Balance';
import { Budget } from './components/Budget';
import { Expenses } from './components/Expenses';
import { Form } from './components/Form';
import { Spend } from './components/Spend';
import { type Expense } from './components/types';

export default function BudgetMate() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const spend = expenses.reduce(function (accumulator: number, expense: Expense) {
    return accumulator + expense.cost;
  }, 0);

  const balance = Math.abs(budget - spend);

  const onAddExpense = (items: Expense[]) => {
    setExpenses(items);
  };

  const onRemoveExpense = (id: string | number) => {
    setExpenses(items => items.filter(item => item.id !== id));
  };

  const onSetBudget = (amount: number) => setBudget(amount);
  return (
    <div className="mx-auto my-12 max-w-none px-4 sm:px-6 lg:max-w-4xl 2xl:max-w-5xl">
      <header className="mb-8 flex flex-col items-center sm:flex-row sm:justify-between">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-slate-700 sm:mb-0 sm:text-4xl">
          Budget Mate
        </h1>
        {budget > 0 && <Form onAddExpenses={onAddExpense} />}
      </header>
      <div className="grid-col-1 mb-6 grid items-center gap-4 rounded-md bg-white p-4 shadow-sm sm:grid-cols-3 sm:gap-6 sm:p-6">
        <Budget budget={budget} onSetBudget={onSetBudget} />
        <Balance balance={balance} />
        <Spend spend={spend} />
      </div>
      <Expenses expenses={expenses} onRemoveExpense={onRemoveExpense} />
    </div>
  );
}
