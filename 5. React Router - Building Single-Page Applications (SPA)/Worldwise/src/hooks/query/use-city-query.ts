import { getCityData, type GetCityDataArgs } from '@/data/get-city';
import { useQuery } from '@tanstack/react-query';

export type UseCityQueryArgs = GetCityDataArgs & {
  enabled?: boolean;
};

export function useCityQuery(args: UseCityQueryArgs) {
  return useQuery({
    queryKey: ['/cities', args.id],
    queryFn: () => getCityData({ id: args.id }),
    enabled: args.enabled || !!args.id,
  });
}
