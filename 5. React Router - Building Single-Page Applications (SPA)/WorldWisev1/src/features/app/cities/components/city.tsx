import { BackButton } from '@/components/elements/back-button';
import { Spinner } from '@/components/elements/spinner';
import { Button } from '@/components/ui/button';
import { useCities } from '@/contexts/cities';
import { formatDate } from '@/utils/format-date';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function City() {
  const { id } = useParams() as { id: string };
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (isLoading) <Spinner />;

  if (!currentCity) return;

  return (
    <div className="flex w-full flex-col space-y-4 rounded-md bg-gray-600 px-4 py-6">
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">City Name</p>
        <div className="flex items-center space-x-2">
          <picture className="h-6 max-h-6 w-8">
            <img
              src={`https://flagcdn.com/${currentCity.abbreviation}.svg`}
              alt={`Flag of ${currentCity.abbreviation}`}
              className="h-full w-full rounded-sm ring-1 ring-gray-800"
            />
          </picture>
          <h3 className="font-semibold text-gray-100">{currentCity.cityName}</h3>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">You went to {currentCity.cityName} on</p>
        <h3 className="font-semibold text-gray-100">
          {formatDate(currentCity.date, 'dddd, MMMM D, YYYY')}
        </h3>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">Your notes</p>
        <h3 className="font-semibold text-gray-100">{currentCity.notes}</h3>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-xs uppercase text-gray-400">Learn more</p>
        <a
          href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-5z00 font-semibold text-amber-400 underline underline-offset-2"
        >
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div className="flex items-center justify-between">
        <BackButton />
        <Button>Edit</Button>
      </div>
    </div>
  );
}
