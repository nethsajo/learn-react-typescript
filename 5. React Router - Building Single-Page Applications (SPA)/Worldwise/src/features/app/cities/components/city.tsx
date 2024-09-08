import { type GetCityDataArgs } from '@/data/get-city';
import { useCityQuery } from '@/hooks/query/use-city-query';
import { useParams } from 'react-router-dom';

export function City() {
  const { id } = useParams() as GetCityDataArgs;

  const { data: city = null, isLoading, isFetching } = useCityQuery({ id });

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (!city) return <p>City not found</p>;

  return <h1>City</h1>;
}
