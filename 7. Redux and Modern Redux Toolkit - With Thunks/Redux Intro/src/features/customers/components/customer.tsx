import { useAppSelector } from '@/store';

export function Customer() {
  const customer = useAppSelector(store => store.customer);

  return (
    <h2 className="text-lg font-semibold text-zinc-800">
      👋 Welcome, <span className="text-indigo-600">{customer.full_name}</span>
    </h2>
  );
}
