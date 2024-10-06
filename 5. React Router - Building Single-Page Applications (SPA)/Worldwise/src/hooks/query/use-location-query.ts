import { getLocationData, type GetLocationDataArgs } from '@/data/get-location';
import { useQuery } from '@tanstack/react-query';

export type UseLocationQueryArgs = GetLocationDataArgs & {
  enabled?: boolean;
};

export function useLocationQuery(args: UseLocationQueryArgs) {
  return useQuery({
    queryKey: ['location', args.lat, args.lng],
    queryFn: () => getLocationData({ lat: args.lat, lng: args.lng }),
    enabled: args.enabled || (!!args.lat && !!args.lng),
    retry: false,
  });
}
