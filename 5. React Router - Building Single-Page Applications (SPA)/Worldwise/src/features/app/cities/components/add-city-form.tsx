import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft } from 'lucide-react';
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
        <label htmlFor="notes" className="text-sm text-gray-100">
          Notes about your trip to X?
        </label>
        <textarea
          rows={3}
          name="notes"
          id="notes"
          className="block w-full resize-none rounded-md border-0 bg-gray-200 bg-transparent py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button variant="secondary">
          <ChevronLeft className="stroke-current" />
          Back
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
