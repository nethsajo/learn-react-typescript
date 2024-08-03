import { getCitiesData } from '@/data/get-cities';
import { useQuery } from '@tanstack/react-query';

export function useCitiesQuery() {
  return useQuery({
    queryKey: ['/cities'],
    queryFn: getCitiesData,
  });
}
