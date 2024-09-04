import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Atom } from 'lucide-react';

export type HeaderProps = {
  blogCount: number;
};

export function Header({ blogCount }: HeaderProps) {
  return (
    <header className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-4 md:grid-cols-[1fr_auto_auto_auto]">
      <div className="inline-flex items-center space-x-1 text-gray-900">
        <Atom size={32} className="stroke-indigo-900" />
        <h1 className="text-xl font-bold sm:text-2xl">The Atomic Blog</h1>
      </div>
      <p className="w-full font-medium text-gray-500">
        🚀 <span className="text-sm font-bold text-gray-900">{blogCount}</span> atomic posts found
      </p>
      <Input id="search" scale="lg" variant="outline" placeholder="Search posts..." />
      <Button size="lg" variant="default">
        Clear posts
      </Button>
    </header>
  );
}
