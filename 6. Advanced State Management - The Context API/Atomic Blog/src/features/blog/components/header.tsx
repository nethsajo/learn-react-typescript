import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Atom } from 'lucide-react';
import { type ChangeEvent } from 'react';
import { usePosts } from '../contexts/post';

type HeaderProps = {
  isFakeDark: boolean;
  onSetFakeDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ isFakeDark, onSetFakeDark }: HeaderProps) {
  const { posts, query, isToggle, onSetQuery, onClearBlog, onToggleForm } = usePosts();

  return (
    <header className="flex flex-col space-y-6">
      <div className="grid w-full grid-cols-8 grid-rows-2 items-center gap-x-4 gap-y-4 sm:grid-rows-none">
        <div className="col-span-full inline-flex items-center space-x-1 text-gray-900 sm:col-span-4 dark:text-indigo-300">
          <Atom size={32} className="stroke-indigo-900 dark:stroke-indigo-500" />
          <h1 className="text-xl font-bold sm:text-2xl">The Atomic Blog</h1>
        </div>
        <Input
          id="search"
          scale="lg"
          variant="outline"
          placeholder="Search posts..."
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onSetQuery(event.target.value)}
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
      <div className="flex items-center">
        <p className="font-medium text-gray-500 dark:text-gray-400">
          🚀{' '}
          <span className="text-sm font-bold text-gray-900 dark:text-indigo-200">
            {posts.length}
          </span>{' '}
          atomic posts found
        </p>
        <div className="ml-auto flex items-center space-x-2">
          <Button className="ml-auto" onClick={onToggleForm} disabled={isToggle}>
            Create post
          </Button>
          <Button
            variant="outline"
            className="border-2 border-gray-300 hover:bg-gray-100 dark:border-indigo-500 dark:hover:bg-indigo-500"
            onClick={() => onSetFakeDark(isFakeDark => !isFakeDark)}
          >
            {isFakeDark ? '☀️' : '🌙'}
          </Button>
        </div>
      </div>
    </header>
  );
}
