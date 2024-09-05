import { PostContext } from '@/contexts/post';
import { type Blog } from '@/types/blog';
import { useState } from 'react';
import { AddBlogForm } from './components/add-blog-form';
import { BlogList } from './components/blog-list';
import { Header } from './components/header';
import { createRandomPost } from './utils/create-random-post';

export default function AtomicBlog() {
  const [query, setQuery] = useState('');
  const [isToggle, setIsToggle] = useState(false);
  //The callback function will only run in initial render
  const [blogs, setBlogs] = useState<Blog[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const handleSubmitBlog = (blog: Blog) => {
    setBlogs(blogs => [...blogs, blog]);
  };

  const handleClearBlog = () => setBlogs([]);

  const handleToggleForm = () => setIsToggle(toggle => !toggle);

  // Derived state. These are the posts that will actually be displayed
  const posts =
    query.length > 0
      ? blogs.filter(blog => `${blog.title} ${blog.body}`.toLowerCase().includes(query))
      : blogs;

  return (
    <PostContext.Provider value={{ isToggle, posts, onToggleForm: handleToggleForm }}>
      <div className="mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
        <Header query={query} setQuery={setQuery} onClearBlog={handleClearBlog} />
        {isToggle && <AddBlogForm onSubmitBlog={handleSubmitBlog} />}
        <BlogList />
      </div>
    </PostContext.Provider>
  );
}
