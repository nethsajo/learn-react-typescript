import { calculateMinutesLeft } from '@/utils/calculate-minutes-left';
import { formatCurrency } from '@/utils/format-currency';
import { formatDate } from '@/utils/format-date';
import { type Order } from '../_types/order';

export default function OrderStatus({ order }: { order: Order }) {
  const targetDeliveryTime = calculateMinutesLeft(order.estimatedDelivery);

  return (
    <div className="flex flex-col items-start gap-12 lg:flex-row">
      <div className="w-full grow rounded-lg border border-zinc-300 bg-white/90 p-8 shadow-lg lg:grow">
        <div className="space-y-8">
          <div className="flex flex-col justify-between space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <h2 className="text-2xl font-medium">
              Order <span className="font-bold">#{order.id}</span>
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
            {order.cart.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 py-2">
                <div className="inline-flex basis-8 items-center justify-center rounded-md bg-red-100 px-2 py-1 font-semibold text-red-600">
                  {item.quantity} <span className="text-xs">x</span>
                </div>
                <div className="flex grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="ml-auto font-medium">{formatCurrency(item.totalPrice)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg border border-zinc-300 bg-white/90 p-8 shadow-lg lg:basis-2/6">
        <h2 className="text-base font-bold">Order Summary</h2>
      </div>
    </div>
  );
}
