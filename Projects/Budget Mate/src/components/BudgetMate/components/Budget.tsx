import { CircleDollarSign, Pencil } from 'lucide-react';
import { type FormEvent } from 'react';

import { Card } from './Card';

type Props = {
  budget: number;
  onSetBudget: (value: number) => void;
};

export function Budget({ budget, onSetBudget }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card className="bg-blue-500">
      <div className="flex items-center space-x-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500">
          <CircleDollarSign className="h-6 w-6 stroke-current" />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-xl font-semibold tracking-tight text-blue-50">&#8369; 0</h2>
          <span className="text-sm font-medium text-slate-100">Budget</span>
        </div>
        <button className="inline-flex h-10 w-10 items-center justify-center text-blue-50 outline-none">
          <Pencil className="h-6 w-6 stroke-current" />
        </button>
      </div>
    </Card>
  );
}
