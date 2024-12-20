import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { memo, useState, type ChangeEvent, type FormEvent } from 'react';
import { usePosts } from '../contexts/post';

export const AddBlogForm = memo(function AddBlogForm() {
  const context = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    context.onSubmitBlog({ title, body });

    setTitle('');
    setBody('');
  };

  return context.isToggle ? (
    <div className="w-full rounded-md bg-gray-100 p-4 dark:bg-indigo-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="title"
          variant="outline"
          scale="sm"
          placeholder="Post title"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
        />
        <Textarea
          id="body"
          rows={3}
          variant="outline"
          placeholder="Post body"
          value={body}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setBody(event.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <Button variant="ghost" onClick={context.onToggleForm}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  ) : null;
});
