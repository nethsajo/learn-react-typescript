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
      <form onSubmit={handleSubmit}></form>
    </Card>
  );
}
