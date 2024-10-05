import { Message } from '@/components/elements/message';
import { Spinner } from '@/components/elements/spinner';
import { useCitiesQuery } from '@/hooks/query/use-cities-query';
import { formatDate } from '@/utils/format-date';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCurrentCity } from '../contexts/CityContext';

export function CityList() {
  const { data: cities = [], isLoading, isFetching } = useCitiesQuery();
  const { currentCity } = useCurrentCity();

  if (isLoading || isFetching) return <Spinner />;

  if (!cities.length) <Message message="Add your first city by clicking on a city on the map" />;

  return (
    <div className="flex w-full flex-col space-y-4 sm:w-auto">
      {cities.map(city => (
        <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} key={city.id}>
          <div
            className={`grid grid-cols-[32px_1fr_24px] grid-rows-2 items-center gap-x-4 rounded-md border-l-4 border-emerald-500 bg-gray-600 px-4 py-2.5 sm:grid-cols-[32px_1fr_1fr_24px] sm:grid-rows-1 lg:grid-rows-1 ${currentCity?.id === city.id ? 'border-y-2 border-r-2' : null}`}
          >
            <picture className="row-span-full h-6 max-h-6 w-8 sm:row-span-1">
              <img
                src={`https://flagcdn.com/${city.abbreviation}.svg`}
                alt={`Flag of ${city.abbreviation}`}
                className="h-full w-full rounded-sm ring-1 ring-gray-600"
              />
            </picture>
            <h3 className="row-span-1 mr-auto font-medium text-gray-200">{city.cityName}</h3>
            <time className="row-start-2 text-gray-400 sm:row-span-1">{formatDate(city.date)}</time>
            <button className="col-span-2 row-span-full inline-flex h-6 w-6 items-center justify-center justify-self-end rounded-full bg-gray-700 shadow-sm ring-1 ring-gray-700 transition-colors duration-150 hover:bg-gray-800 active:bg-gray-900 sm:col-span-1 sm:row-span-1 lg:justify-self-center">
              <X className="h-3 w-3 fill-current" />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
