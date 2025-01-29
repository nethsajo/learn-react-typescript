import { calculateMinutesLeft } from '@/utils/calculate-minutes-left';
import { formatCurrency } from '@/utils/format-currency';
import { formatDate } from '@/utils/format-date';
import { useLoaderData, type Params } from 'react-router-dom';
import { getOrderData } from '../_data/get-order';
import { type Order } from '../_types/order';

export default function ShowOrder() {
  const order = useLoaderData() as Order;

  const targetDeliveryTime = calculateMinutesLeft(order.estimatedDelivery);

  return (
    <div>
      <h2>Status</h2>
      <div>
        {order.priority && <span>Priority</span>}
        <span>{order.status} order</span>
      </div>
      <p>
        {targetDeliveryTime >= 0
          ? `Only ${calculateMinutesLeft(order.estimatedDelivery)} minutes left 😃`
          : 'Order should have arrived'}
      </p>
      <p>(Estimated delivery: {formatDate(order.estimatedDelivery, 'MMM DD, hh:ss A')})</p>
      <p>Price pizza: {formatCurrency(order.orderPrice)}</p>
      <p>Price priority: {formatCurrency(order.priorityPrice)}</p>
      <p>To pay on delivery: {formatCurrency(order.orderPrice + order.priorityPrice)}</p>
    </div>
  );
}

export const orderDataLoader = async ({ params }: { params: Params<'id'> }) => {
  return await getOrderData(params.id ?? '');
};
