import { API_URL } from '@/constants/common';
import { type CreateOrderDataArgs, type Order } from '../_types/order';

export async function createOrderData(args: CreateOrderDataArgs): Promise<Order> {
  try {
    const response = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) throw Error();

    const { data } = await response.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}
