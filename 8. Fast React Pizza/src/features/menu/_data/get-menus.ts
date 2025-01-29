import { API_URL } from '@/constants/common';
import { type Menu } from '../_types/menu';

export async function getMenusData(): Promise<Array<Menu>> {
  const response = await fetch(`${API_URL}/menu`);
  if (!response.ok) throw Error('There is some problem on fetching menu. Please try again.');

  const { data } = await response.json();

  return data;
}
