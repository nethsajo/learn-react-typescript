import { Message } from '@/components/elements/message';
import { Spinner } from '@/components/elements/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { API_KEY } from '@/constants/env';
import { ROUTES } from '@/constants/routes';
import { useCities } from '@/contexts/cities';
import { useUrlPosition } from '@/hooks/use-url-position';
import { formatDate } from '@/utils/format-date';
import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type Geolocation = {
  city: string;
  countryCode: string;
  countryName: string;
  locality: string;
  latitude: number;
  longitude: number;
};

export function AddCityForm() {
  const navigate = useNavigate();
  const { lat, lng } = useUrlPosition();
  const { isLoading, createCity } = useCities();
  const [geolocation, setGeolocation] = useState<Geolocation | null>(null);
  const [isGeolocationLoading, setIsGeolocationLoading] = useState(false);
  const [geoLocationError, setGeolocationError] = useState('');

  const [date, setDate] = useState(formatDate(new Date().toLocaleString(), 'YYYY-MM-DD'));
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!lat && !lng) return;

    const fetchGeolocation = async () => {
      try {
        setIsGeolocationLoading(true);
        setGeolocationError('');

        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&key=${API_KEY}`
        );

        const data = await response.json();

        if (!data.countryCode) {
          throw new Error("That doesn't seem to be a city. Click somewhere else 😉");
        }

        setGeolocation(data);
      } catch (error) {
        setGeolocationError((error as Error).message);
      } finally {
        setIsGeolocationLoading(false);
      }
    };
    fetchGeolocation();
  }, [lat, lng]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!geolocation?.city || !date) return;

    const data = {
      id: crypto.randomUUID(),
      cityName: geolocation.city,
      country: geolocation.countryName,
      abbreviation: geolocation.countryCode.toLowerCase(),
      date,
      notes,
      position: {
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      },
    };

    await createCity(data);

    navigate(`${ROUTES.APP}/${ROUTES.CITIES}`);
  };

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  if (isLoading || isGeolocationLoading) return <Spinner />;

  if (!lat && !lng) return <Message message="Start by clicking somewhere on the map." />;

  if (geoLocationError) return <Message message={geoLocationError} />;

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full grid-cols-1 gap-4 rounded-lg bg-gray-600 p-4 sm:grid-cols-2 lg:grid-cols-1"
    >
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="city">City Name</Label>
        <div className="relative">
          <Input
            variant="outline"
            id="city"
            value={geolocation?.city || geolocation?.locality}
            readOnly
          />
          <img
            src={`https://flagcdn.com/${geolocation?.countryCode.toLowerCase()}.svg`}
            alt={`Flag of ${geolocation?.countryCode}`}
            className="absolute right-4 top-2/4 flex h-6 -translate-y-2/4 rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="date">
          When did you go to {geolocation?.city || geolocation?.locality}?
        </Label>
        <Input
          type="date"
          variant="outline"
          id="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </div>
      <div className="col-span-full flex flex-col space-y-1.5">
        <Label htmlFor="notes">
          Notes about your trip to {geolocation?.city || geolocation?.locality}?
        </Label>
        <Textarea
          rows={3}
          variant="outline"
          id="notes"
          value={notes}
          onChange={event => setNotes(event.target.value)}
        />
      </div>
      <div className="col-span-full flex items-center justify-between">
        <Button variant="secondary" onClick={handleBack}>
          Back
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
