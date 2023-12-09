import { Scale } from 'lucide-react';

import { Card } from './Card';

type Props = {
  balance: number;
};

export function Balance({ balance }: Props) {
  return (
    <Card>
      <div className="flex items-center space-x-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-yellow-500">
          <Scale className="h-6 w-6 stroke-current" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold tracking-tight text-slate-600">&#8369; {balance}</h2>
          <span className="text-sm font-medium text-slate-400">Remaining Balance</span>
        </div>
      </div>
    </Card>
  );
}
