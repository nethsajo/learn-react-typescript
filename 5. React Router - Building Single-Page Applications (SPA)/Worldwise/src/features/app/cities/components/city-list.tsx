import { useCitiesQuery } from '@/hooks/query/use-cities-query';

export function CityList() {
  const { data: cities = [], isLoading, isFetching } = useCitiesQuery();

  if (isLoading || isFetching) return <div>Loading...</div>;

  return (
    <div className="flex flex-col space-y-6">
      {cities.map(city => (
        <div className="flex space-x-4" key={city.id}>
          <span className="h-6 max-h-6 w-9">
            <img
              src={`https://flagcdn.com/${city.abbreviation}.svg`}
              alt={`Flag of ${city.abbreviation}`}
              className="h-full rounded-sm"
            />
          </span>
          <h3 className="mr-auto">{city.cityName}</h3>
          <time>{city.date}</time>
        </div>
      ))}
    </div>
  );
}
