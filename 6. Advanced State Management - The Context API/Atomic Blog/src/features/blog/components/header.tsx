import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Atom } from 'lucide-react';
import { type ChangeEvent } from 'react';

export type HeaderProps = {
  blogCount: number;
  query: string;
  setQuery: (value: string) => void;
  onClearBlog: () => void;
};

export function Header({ blogCount, query, setQuery, onClearBlog }: HeaderProps) {
  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <header className="flex flex-col space-y-6">
      <div className="grid w-full grid-cols-8 grid-rows-2 items-center gap-x-4 gap-y-4 sm:grid-rows-none">
        <div className="col-span-full inline-flex items-center space-x-1 text-gray-900 sm:col-span-4">
          <Atom size={32} className="stroke-indigo-900" />
          <h1 className="text-xl font-bold sm:text-2xl">The Atomic Blog</h1>
        </div>
        <Input
          id="search"
          scale="lg"
          variant="outline"
          placeholder="Search posts..."
          value={query}
          onChange={handleChangeQuery}
          className="col-span-6 sm:col-span-3"
        />
        <Button
          size="lg"
          variant="default"
          onClick={onClearBlog}
          className="col-span-2 sm:col-span-1"
        >
          Clear
        </Button>
      </div>
      <div className="">
        <p className="w-full font-medium text-gray-500">
          🚀 <span className="text-sm font-bold text-gray-900">{blogCount}</span> atomic posts found
        </p>
      </div>
    </header>
  );
}
