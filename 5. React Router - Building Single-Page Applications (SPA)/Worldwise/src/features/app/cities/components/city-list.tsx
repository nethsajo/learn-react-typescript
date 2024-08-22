import { useCitiesQuery } from '@/hooks/query/use-cities-query';
import { formatDate } from '@/utils/format-date';
import { X } from 'lucide-react';

export function CityList() {
  const { data: cities = [], isLoading, isFetching } = useCitiesQuery();

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (!cities.length)
    return (
      <p className="max-w-[200px] text-balance text-center">
        Add your first city by clicking on a city on the map
      </p>
    );

  return (
    <div className="flex flex-col space-y-4">
      {cities.map(city => (
        <div
          className="grid grid-cols-[32px_1fr_1fr_24px] items-center gap-4 rounded-md border-l-4 border-l-emerald-500 bg-slate-600 px-4 py-2.5"
          key={city.id}
        >
          <span className="h-6 max-h-6 w-8">
            <img
              src={`https://flagcdn.com/${city.abbreviation}.svg`}
              alt={`Flag of ${city.abbreviation}`}
              className="h-full rounded-sm ring-1 ring-slate-600"
            />
          </span>
          <h3 className="mr-auto font-medium text-slate-200">{city.cityName}</h3>
          <time className="text-right text-slate-400">{formatDate(city.date)}</time>
          <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 shadow-sm ring-1 ring-slate-700 transition-colors duration-150 hover:bg-slate-800 active:bg-slate-900">
            <X className="h-3 w-3 fill-current" />
          </button>
        </div>
      ))}
    </div>
  );
}
