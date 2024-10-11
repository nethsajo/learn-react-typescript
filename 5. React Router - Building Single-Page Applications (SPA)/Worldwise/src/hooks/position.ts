import { getPositionData } from '@/data/position';
import { type Coordinates } from '@/types/coordinates';
import { useQuery } from '@tanstack/react-query';

export type UsePositionQueryArgs = Coordinates & {
  enabled?: boolean;
};

export function usePositionQuery(args: UsePositionQueryArgs) {
  return useQuery({
    queryKey: ['GET /position', args.lat, args.lng],
    queryFn: () => getPositionData({ lat: args.lat, lng: args.lng }),
    enabled: args.enabled || (!!args.lat && !!args.lng),
    retry: false,
  });
}
