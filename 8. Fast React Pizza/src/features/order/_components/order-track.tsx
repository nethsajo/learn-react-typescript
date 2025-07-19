import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData, useNavigate, type LoaderFunctionArgs } from 'react-router-dom';
import { getOrderData } from '../_data/get-order';
import { type Order } from '../_types/order';
import OrderStatus from './order-status';

export const OrderTrack = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { order } = useLoaderData() as { order: Order | null };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/track?id=${query}`);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 rounded-2xl border border-zinc-300 bg-white/90 p-8 shadow-lg">
        <div className="mb-4 flex items-center space-x-2">
          <Search className="stroke-red-600" />
          <h2 className="text-2xl font-semibold text-zinc-800">Track your order</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0"
        >
          <Input
            variant="outline"
            name="search-order"
            placeholder="Search order number"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <Button type="submit" className="w-full bg-red-700 sm:w-auto">
            Track order
          </Button>
        </form>
      </div>
      {order && <OrderStatus order={order} />}
    </div>
  );
};

export const orderDataLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) return { order: null };

  const order = await getOrderData(id);
  return { order };
};
