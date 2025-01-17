import { Button } from '@/components/ui/button';
import { memo } from 'react';

type MenuProps = {
  transaction: string;
  setTransaction: React.Dispatch<React.SetStateAction<string>>;
};

export const Transaction = memo(function Transaction({ transaction, setTransaction }: MenuProps) {
  const transactions = ['deposit', 'withdraw', 'loan'];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {transactions.map((_transaction, index) => (
        <Button
          key={index}
          variant="secondary"
          onClick={() => setTransaction(_transaction)}
          className="capitalize"
          disabled={_transaction === transaction}
        >
          {_transaction}
        </Button>
      ))}
    </div>
  );
});
