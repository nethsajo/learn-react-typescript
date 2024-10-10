import { getCitiesData, getCityData } from "@/data/cities";
import { useQuery } from "@tanstack/react-query";

export function useCitiesQuery() {
  return useQuery({
    queryKey: ['GET /cities'],
    queryFn: getCitiesData,
  });
}

export function useCityQuery(id: string) {
  return useQuery({
    queryKey: ['GET /cities', id],
    queryFn: () => getCityData(id),
  });
}
