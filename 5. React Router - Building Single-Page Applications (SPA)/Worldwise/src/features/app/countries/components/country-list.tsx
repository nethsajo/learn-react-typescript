import { useCitiesQuery } from '@/hooks/query/use-cities-query';
import { type Country } from '@/types/country';

export function CountryList() {
  const { data: cities = [], isLoading, isFetching } = useCitiesQuery();

  if (isLoading || isFetching) return <p>Loading...</p>;

  const countries = cities.reduce<Country[]>((countries, city) => {
    if (!countries.map(country => country.name).includes(city.country)) {
      return [...countries, { name: city.country }];
    } else {
      return countries;
    }
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {countries.map((country, index) => {
        return <div key={index}>{country.name}</div>;
      })}
    </div>
  );
}
