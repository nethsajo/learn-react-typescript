import { formatCurrency } from '@/utils/format-currency';
import { type Order } from '../_types/order';

export const OrderSummary = ({ order }: { order: Order }) => {
  const total = order.orderPrice + (order.priorityPrice ?? 0);

  return (
    <div className="w-full rounded-lg border border-zinc-300 bg-white/90 p-8 shadow-lg lg:basis-2/6">
      <h2 className="mb-6 text-base font-bold">Order Summary</h2>
      <div className="divide-y">
        <div className="grid grid-cols-[1fr_auto] py-2">
          <h3 className="font-medium text-zinc-700">Subtotal</h3>
          <p className="font-bold text-zinc-900">{formatCurrency(order.orderPrice)}</p>
        </div>
        {order.priority && (
          <div className="grid grid-cols-[1fr_auto] py-2">
            <h3 className="font-medium text-zinc-700">Priority Fee</h3>
            <p className="font-bold text-zinc-900">{formatCurrency(order.priorityPrice)}</p>
          </div>
        )}
        <div className="grid grid-cols-[1fr_auto] py-2">
          <h3 className="font-medium text-zinc-700">Total</h3>
          <p className="font-bold text-zinc-900">{formatCurrency(total)}</p>
        </div>
      </div>
    </div>
  );
};
