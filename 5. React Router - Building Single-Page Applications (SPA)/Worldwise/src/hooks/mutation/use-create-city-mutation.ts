import { createCityData } from '@/data/create-city';
import { type City } from '@/types/city';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export type UseCreateCityMutationArgs = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useCreateCityMutation(args: UseCreateCityMutationArgs = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (city: City) => createCityData(city),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cities'] }),
    onError: args.onError,
  });
}
