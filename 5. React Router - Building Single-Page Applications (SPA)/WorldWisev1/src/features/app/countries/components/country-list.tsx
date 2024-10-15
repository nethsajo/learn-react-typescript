import { Spinner } from '@/components/elements/spinner';
import { useCitiesQuery } from '@/hooks/cities';

export type Country = {
  name: string;
  abbreviation: string;
};

export function CountryList() {
  const { data: cities = [], isLoading, isFetching } = useCitiesQuery();

  if (isLoading || isFetching) return <Spinner />;

  const countries = cities.reduce<Country[]>((countries, city) => {
    if (!countries.map(country => country.name).includes(city.country)) {
      return [...countries, { name: city.country, abbreviation: city.abbreviation }];
    } else {
      return countries;
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {countries.map((country, index) => {
        return (
          <div className="flex flex-col items-center space-y-2" key={index}>
            <picture className="h-10 max-h-10 w-16 max-w-16">
              <img
                src={`https://flagcdn.com/${country.abbreviation}.svg`}
                alt={`Flag of ${country.abbreviation.toUpperCase()}`}
                className="h-full w-full rounded-sm ring-1 ring-slate-600"
              />
            </picture>
            <h2 className="text-sm font-medium text-slate-200">{country.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
