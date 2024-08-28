import { Button } from '@/components/ui/button';
import { type FormEvent } from 'react';

export function AddCityForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 rounded-md bg-gray-600 p-4">
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="city" className="text-sm text-gray-100">
          City Name
        </label>
        <input
          type="text"
          id="city"
          readOnly
          className="block w-full rounded-md border-0 bg-gray-200 bg-transparent py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-400 read-only:bg-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="date" className="text-sm text-gray-100">
          When did you go to X?
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className="block w-full rounded-md border-0 bg-gray-200 bg-transparent py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
        />
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
      <div className="flex items-center">
        <Button type="submit" variant="link">
          Add
        </Button>
        <button className="ml-auto">Back</button>
      </div>
    </form>
  );
}
