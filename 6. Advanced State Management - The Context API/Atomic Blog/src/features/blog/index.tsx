import { type Blog } from '@/types/blog';
import { useState } from 'react';
import { AddBlogForm } from './components/add-blog-form';
import { BlogList } from './components/blog-list';
import { Header } from './components/header';
import { createRandomPost } from './utils/create-random-post';

export default function AtomicBlog() {
  const [query, setQuery] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const handleSubmitBlog = (blog: Blog) => {
    setBlogs(blogs => [...blogs, blog]);
  };

  const handleClearBlog = () => {
    setBlogs([]);
  };

  const posts =
    query.length > 0
      ? blogs.filter(blog => `${blog.title} ${blog.body}`.toLowerCase().includes(query))
      : blogs;

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
      <Header
        query={query}
        setQuery={setQuery}
        onClearBlog={handleClearBlog}
        blogCount={posts.length}
      />
      <AddBlogForm onSubmitBlog={handleSubmitBlog} />
      <BlogList blogs={posts} />
    </div>
  );
}
