import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type FormEvent } from 'react';

export function AddBlogForm() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="w-full rounded-md bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input id="title" variant="outline" scale="sm" placeholder="Post title" />
        <Textarea rows={3} variant="outline" placeholder="Post body" />
        <div className="flex justify-end">
          <Button type="submit">Add post</Button>
        </div>
      </form>
    </div>
  );
}
