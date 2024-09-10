import { Button } from '@/components/ui/button';
import { useCityQuery } from '@/hooks/query/use-city-query';
import { formatDate } from '@/utils/format-date';
import { useParams } from 'react-router-dom';

export function City() {
  const { id } = useParams() as { id: string };

  const { data: city = null, isLoading, isFetching } = useCityQuery({ id });

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (!city) return <p>City not found</p>;

  return (
    <div className="flex w-full flex-col space-y-4 rounded-md bg-gray-600 px-4 py-6">
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">City Name</p>
        <div className="flex items-center space-x-2">
          <picture className="h-6 max-h-6 w-8">
            <img
              src={`https://flagcdn.com/${city.abbreviation}.svg`}
              alt={`Flag of ${city.abbreviation}`}
              className="h-full w-full rounded-sm ring-1 ring-gray-800"
            />
          </picture>
          <h3 className="font-semibold text-gray-100">{city.cityName}</h3>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">You went to {city.cityName} on</p>
        <h3 className="font-semibold text-gray-100">
          {formatDate(city.date, 'dddd, MMMM D, YYYY')}
        </h3>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">Your notes</p>
        <h3 className="font-semibold text-gray-100">{city.notes}</h3>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">Learn more</p>
        <a
          href={`https://en.wikipedia.org/wiki/${city.cityName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-5z00 font-semibold text-amber-400 underline underline-offset-2"
        >
          Check out {city.cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="outline">Back</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
}
