import { useAppSelector } from '@/store';
import { formatCurrency } from '@/utils/format-currency';

export const Balance = () => {
  const balance = useAppSelector(state => state.account.balance);

  return (
    <div className="rounded-md bg-zinc-100 px-4 py-2 text-lg font-bold text-indigo-500 sm:ml-auto">
      {formatCurrency(balance)}
    </div>
  );
};
