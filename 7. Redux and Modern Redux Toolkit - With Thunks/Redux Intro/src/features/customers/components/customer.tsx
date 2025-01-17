import { type RootState } from '@/store';
import { useSelector } from 'react-redux';

export function Customer() {
  const customer = useSelector((store: RootState) => store.customer);

  return (
    <h2 className="text-lg font-semibold text-zinc-800">
      👋 Welcome, <span className="text-indigo-600">{customer.full_name}</span>
    </h2>
  );
}
