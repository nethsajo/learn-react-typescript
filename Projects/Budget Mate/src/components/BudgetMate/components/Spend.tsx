import { HelpingHand } from 'lucide-react';

import { Card } from './Card';

type Props = {
  spend: number;
};

export function Spend({ spend }: Props) {
  return (
    <Card>
      <div className="flex items-center space-x-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
          <HelpingHand className="h-6 w-6 stroke-current" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold tracking-tight text-slate-600">
            &#8369; {spend.toLocaleString()}
          </h2>
          <span className="text-sm font-medium text-slate-400">Spent</span>
        </div>
      </div>
    </Card>
  );
}
