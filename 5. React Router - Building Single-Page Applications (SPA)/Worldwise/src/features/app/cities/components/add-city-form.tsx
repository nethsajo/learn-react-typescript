import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { formatDate } from '@/utils/format-date';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function AddCityForm() {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(formatDate(new Date().toLocaleString(), 'YYYY-MM-DD'));
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full grid-cols-1 gap-4 rounded-lg bg-gray-600 p-4 sm:grid-cols-2 lg:grid-cols-1"
    >
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="city">City Name</Label>
        <Input variant="outline" id="city" value={city} readOnly />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="date">When did you go to X?</Label>
        <Input
          type="date"
          variant="outline"
          id="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </div>
      <div className="col-span-full flex flex-col space-y-1.5">
        <Label htmlFor="notes">Notes about your trip to X?</Label>
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
