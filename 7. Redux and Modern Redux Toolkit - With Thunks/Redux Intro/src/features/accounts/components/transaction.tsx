import { Button } from '@/components/ui/button';

type MenuProps = {
  transaction: string;
  setTransaction: React.Dispatch<React.SetStateAction<string>>;
};

export function Transaction({ transaction, setTransaction }: MenuProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Button
        className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700"
        onClick={() => setTransaction('deposit')}
      >
        Deposit
      </Button>
      <Button
        className="bg-red-500 hover:bg-red-600 active:bg-red-700"
        onClick={() => setTransaction('withdraw')}
      >
        Withdraw
      </Button>
      <Button
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
        onClick={() => setTransaction('loan')}
      >
        Loan
      </Button>
    </div>
  );
}
