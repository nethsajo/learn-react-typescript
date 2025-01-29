import { API_URL } from '@/constants/common';
import { type Order } from '../types/order';

export async function getOrderData(id: Order['id']): Promise<Order> {
  const response = await fetch(`${API_URL}/order/${id}`);
  if (!response.ok) throw Error(`Couldn't find order number: ${id}`);

  const { data } = await response.json();
  return data;
}
