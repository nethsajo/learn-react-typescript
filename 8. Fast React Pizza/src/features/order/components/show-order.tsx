import { formatCurrency } from '@/utils/format-currency';
import { formatDate } from '@/utils/format-date';
import { useLoaderData, type Params } from 'react-router-dom';
import { getOrderData } from '../data/get-order';
import { type Order } from '../types/order';

export const ShowOrder = () => {
  const order = useLoaderData() as Order;

  return (
    <div>
      <h2>Status</h2>
      <div>
        {order.priority && <span>Priority</span>}
        <span>{status} order</span>
      </div>
      <p>Only 2094898 minutes left 😃</p>
      <p>(Estimated delivery: {formatDate(order.estimatedDelivery, 'MMM DD, hh:ss A')})</p>
      <p>Price pizza: {formatCurrency(order.orderPrice)}</p>
      <p>Price priority: {formatCurrency(order.priorityPrice)}</p>
      <p>To pay on delivery: {formatCurrency(order.orderPrice + order.priorityPrice)}</p>
    </div>
  );
};

export const orderDataLoader = async ({ params }: { params: Params<'id'> }) => {
  return await getOrderData(params.id ?? '');
};
