import { type Cart } from '@/features/cart/_types/cart';
import { formatCurrency } from '@/utils/format-currency';

export const OrderItem = ({ item }: { item: Cart }) => {
  return (
    <div className="flex items-center space-x-3 py-2">
      <div className="inline-flex basis-8 items-center justify-center rounded-md bg-red-100 px-2 py-1 font-semibold text-red-600">
        {item.quantity} <span className="text-xs">x</span>
      </div>
      <div className="flex grow">
        <h3 className="font-medium">{item.name}</h3>
        <p className="ml-auto font-medium">{formatCurrency(item.totalPrice)}</p>
      </div>
    </div>
  );
};
