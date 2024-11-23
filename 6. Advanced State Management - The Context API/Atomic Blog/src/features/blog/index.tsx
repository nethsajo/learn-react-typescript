import { Button } from '@/components/ui/button';
import { memo, useMemo } from 'react';
import { AddBlogForm } from './components/add-blog-form';
import { Archive } from './components/archive';
import { BlogList } from './components/blog-list';
import { Header } from './components/header';
import { usePosts } from './contexts/post';

type AtomicBlogProps = {
  isFakeDark: boolean;
  setIsFakeDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const AtomicBlog = ({ isFakeDark, setIsFakeDark }: AtomicBlogProps) => {
  const { blogs, onSubmitBlog } = usePosts();

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post archive in addition to ${blogs.length} main posts`,
    };
  }, [blogs.length]);

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
      <Button
        variant="outline"
        className="absolute left-0 top-0 border-2 border-gray-300 hover:bg-gray-100 dark:border-indigo-500 dark:hover:bg-indigo-500"
        onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)}
      >
        {isFakeDark ? '☀️' : '🌙'}
      </Button>
      <Header />
      <AddBlogForm />
      <BlogList />
      <Archive archiveOptions={archiveOptions} onAddBlog={onSubmitBlog} />
    </div>
  );
};

export default memo(AtomicBlog);
