import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { type FormEvent } from 'react';

export function AddCityForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 rounded-lg bg-gray-600 p-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="city">City Name</Label>
        <Input variant="outline" id="city" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="date">When did you go to X?</Label>
        <Input type="date" variant="outline" id="date" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="notes">Notes about your trip to X?</Label>
        <Textarea rows={3} variant="outline" id="notes" />
      </div>
      <div className="flex items-center justify-between">
        <Button variant="secondary">Back</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
