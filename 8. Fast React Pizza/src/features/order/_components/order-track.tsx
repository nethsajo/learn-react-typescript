import { Input } from '@/components/ui/input';
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
    setQuery('');
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit}>
        <Input
          className="bg-white"
          name="search-order"
          placeholder="Search order number"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>

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
