import { Message } from '@/components/elements/message';
import { Spinner } from '@/components/elements/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ROUTES } from '@/constants/routes';
import { useCreateCityMutation } from '@/hooks/cities';
import { useUrlPosition } from '@/hooks/map/use-url-position';
import { usePositionQuery } from '@/hooks/position';
import { formatDate } from '@/utils/format-date';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function AddCityForm() {
  const navigate = useNavigate();
  const { lat, lng } = useUrlPosition();
  const { data, isLoading, isFetching, error } = usePositionQuery({ lat, lng });
  const { mutateAsync, isPending } = useCreateCityMutation();

  const [date, setDate] = useState(formatDate(new Date().toLocaleString(), 'YYYY-MM-DD'));
  const [notes, setNotes] = useState('');

  if (!lat && !lng) return <Message message="Start by clicking somewhere on the map." />;

  if (error) return <Message message={error.message} />;

  if (!data) return;
  if (isLoading || isFetching) return <Spinner />;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!data.city || !date) return;

    await mutateAsync({
      id: crypto.randomUUID(),
      cityName: data.city,
      country: data.countryName,
      abbreviation: data.countryCode.toLowerCase(),
      date,
      notes,
      position: {
        lat: data.latitude,
        lng: data.longitude,
      },
    });

    navigate(`${ROUTES.APP}/${ROUTES.CITIES}`);
  };

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid w-full grid-cols-1 gap-4 overflow-hidden rounded-lg bg-gray-600 p-4 sm:grid-cols-2 lg:grid-cols-1"
    >
      {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/75">
          <Spinner label="Adding city. Please wait..." />
        </div>
      )}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="city">City Name</Label>
        <div className="relative">
          <Input variant="outline" id="city" value={data.city || data.locality} readOnly />
          <img
            src={`https://flagcdn.com/${data.countryCode.toLowerCase()}.svg`}
            alt={`Flag of ${data.countryCode}`}
            className="absolute right-4 top-2/4 flex h-6 -translate-y-2/4 rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="date">When did you go to {data.city || data.locality}?</Label>
        <Input
          type="date"
          variant="outline"
          id="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </div>
      <div className="col-span-full flex flex-col space-y-1.5">
        <Label htmlFor="notes">Notes about your trip to {data.city || data.locality}?</Label>
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
