import { calculateMinutesLeft } from '@/utils/calculate-minutes-left';
import { formatDate } from '@/utils/format-date';
import { type Order } from '../_types/order';
import { OrderItem } from './order-item';

export default function OrderStatus({ order }: { order: Order }) {
  const targetDeliveryTime = calculateMinutesLeft(order.estimatedDelivery);

  return (
    <div className="w-full grow rounded-lg border border-zinc-300 bg-white/90 p-8 shadow-lg lg:grow">
      <div className="space-y-8">
        <div className="flex flex-col justify-between space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <h2 className="text-2xl font-medium">
            Order <span className="font-bold">#{order.id}</span> status
          </h2>
          <div className="flex items-center space-x-2 uppercase">
            {order.priority && (
              <div className="rounded-full bg-red-500 px-3 py-0.5 font-medium tracking-wide text-red-50">
                Priority
              </div>
            )}
            <div className="rounded-full bg-green-500 px-3 py-0.5 font-medium tracking-wide text-green-50">
              {order.status} order
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <p className="text-base">
            {targetDeliveryTime >= 0
              ? `Only ${calculateMinutesLeft(order.estimatedDelivery)} minutes left! 😄`
              : 'Order should have arrived'}
          </p>
          <p className="text-xs text-zinc-500 sm:text-sm">
            (Estimated Delivery: {formatDate(order.estimatedDelivery)})
          </p>
        </div>
        <div className="flex grow flex-col divide-y">
          {order.cart.map(item => (
            <OrderItem key={item.pizzaId} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
