import { getLocationData, type GetLocationDataArgs } from '@/data/get-location';
import { useQuery } from '@tanstack/react-query';

export type UseLocationQueryArgs = GetLocationDataArgs & {
  enabled?: boolean;
};

export function useLocationQuery(args: UseLocationQueryArgs) {
  return useQuery({
    queryKey: ['/fetch-location', args],
    queryFn: () => getLocationData(args),
    enabled: args.enabled ?? (!!args.lat && !!args.lng),
  });
}
