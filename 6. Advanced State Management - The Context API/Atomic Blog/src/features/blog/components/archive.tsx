import { Button } from '@/components/ui/button';
import { type Blog } from '@/types/blog';
import { memo, useState } from 'react';
import { createRandomPost } from '../utils/create-random-post';

type ArchiveProps = {
  archiveOptions: {
    show: boolean;
    title: string;
  };
  onAddBlog: (post: Blog) => void;
};

export const Archive = memo(function Archive({ archiveOptions, onAddBlog }: ArchiveProps) {
  const [posts] = useState(() => Array.from({ length: 5000 }, () => createRandomPost()));
  const [showArchive, setShowArchive] = useState(archiveOptions.show);

  return (
    <aside>
      <h2 className="mb-2 text-2xl font-bold uppercase dark:text-indigo-300">
        {archiveOptions.title}
      </h2>
      <Button size="sm" className="mb-4" onClick={() => setShowArchive(shown => !shown)}>
        {showArchive ? 'Hide archive posts' : 'Show archive posts'}
      </Button>
      {showArchive && (
        <ul className="grid gap-1">
          {posts.map((post, i) => (
            <li key={i} className="flex justify-between space-x-4 rounded-sm border p-1">
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <strong>{post.title}:</strong> {post.body}
              </p>
              <Button
                variant="link"
                className="h-auto p-0 font-medium text-indigo-500"
                onClick={() => onAddBlog(post)}
              >
                Add as new post
              </Button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});
