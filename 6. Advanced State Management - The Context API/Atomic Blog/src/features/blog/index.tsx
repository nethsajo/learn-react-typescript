import { type Blog } from '@/types/blog';
import { useState } from 'react';
import { AddBlogForm } from './components/add-blog-form';
import { BlogList } from './components/blog-list';
import { Header } from './components/header';
import { createRandomPost } from './utils/create-random-post';

export default function AtomicBlog() {
  const [blogs, setBlogs] = useState<Blog[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const handleSubmitBlog = (blog: Blog) => {
    setBlogs(blogs => [...blogs, blog]);
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
      <Header blogCount={blogs.length} />
      <AddBlogForm onSubmitBlog={handleSubmitBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
}
