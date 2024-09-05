import { type Blog } from '@/types/blog';
import { useState } from 'react';
import { AddBlogForm } from './components/add-blog-form';
import { BlogList } from './components/blog-list';
import { Header } from './components/header';
import { createRandomPost } from './utils/create-random-post';

export default function AtomicBlog() {
  const [query, setQuery] = useState('');
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const handleSubmitBlog = (blog: Blog) => {
    setBlogs(blogs => [...blogs, blog]);
  };

  const handleClearBlog = () => {
    setBlogs([]);
  };

  const handleOpenForm = () => setIsOpenForm(true);
  const handleCloseForm = () => setIsOpenForm(false);

  const posts =
    query.length > 0
      ? blogs.filter(blog => `${blog.title} ${blog.body}`.toLowerCase().includes(query))
      : blogs;

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
      <Header
        query={query}
        blogCount={posts.length}
        setQuery={setQuery}
        onClearBlog={handleClearBlog}
        onOpenForm={handleOpenForm}
      />
      {isOpenForm && <AddBlogForm onSubmitBlog={handleSubmitBlog} onCloseForm={handleCloseForm} />}
      <BlogList blogs={posts} />
    </div>
  );
}
