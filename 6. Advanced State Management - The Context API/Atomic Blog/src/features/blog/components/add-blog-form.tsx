import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type Blog } from '@/types/blog';
import { useState, type ChangeEvent, type FormEvent } from 'react';

export type AddBlogFormProps = {
  onSubmitBlog: (blog: Blog) => void;
};

export function AddBlogForm({ onSubmitBlog }: AddBlogFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmitBlog({ title, body });

    setTitle('');
    setBody('');
  };

  return (
    <div className="w-full rounded-md bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="title"
          variant="outline"
          scale="sm"
          placeholder="Post title"
          value={title}
          onChange={handleChangeTitle}
        />
        <Textarea
          id="body"
          rows={3}
          variant="outline"
          placeholder="Post body"
          value={body}
          onChange={handleChangeBody}
        />
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
