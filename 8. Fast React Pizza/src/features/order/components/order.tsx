import { formatCurrency } from '@/utils/format-currency';
import { formatDate } from '@/utils/format-date';

export const Order = () => {
  const order = {
    id: 'ABCDEF',
    customer: 'Jonas',
    phone: '123456789',
    address: 'Arroios, Lisbon , Portugal',
    priority: true,
    estimatedDelivery: '2027-04-25T10:00:00',
    cart: [
      {
        pizzaId: 7,
        name: 'Napoli',
        quantity: 3,
        unitPrice: 16,
        totalPrice: 48,
      },
      {
        pizzaId: 5,
        name: 'Diavola',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
      },
      {
        pizzaId: 3,
        name: 'Romana',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
      },
    ],
    position: '-9.000,38.000',
    orderPrice: 95,
    priorityPrice: 19,
  };

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
