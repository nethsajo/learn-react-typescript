import { createCityData, deleteCityData, getCitiesData, getCityData } from '@/data/cities';
import { type City } from '@/types/city';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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

export function useCreateCityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (city: City) => createCityData(city),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['GET /cities'] }),
  });
}

export function useDeleteCityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCityData(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['GET /cities'] }),
  });
}
