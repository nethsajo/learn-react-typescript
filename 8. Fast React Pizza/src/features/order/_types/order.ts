import { type Cart } from '@/features/cart/_types/cart';

export type Order = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string | Date;
  cart: Array<Cart>;
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
};

export type CreateOrderDataArgs = Pick<
  Order,
  'customer' | 'phone' | 'address' | 'cart' | 'priority'
>;
