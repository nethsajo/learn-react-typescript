import { useCitiesQuery } from '@/hooks/query/use-cities-query';

export function CityList() {
  const { data = [], isLoading, isFetching } = useCitiesQuery();

  if (isLoading || isFetching) return <div>Loading...</div>;

  return (
    <div className="flex flex-col space-y-6">
      {data.map(city => (
        <div key={city.id}>{city.cityName}</div>
      ))}
    </div>
  );
}
