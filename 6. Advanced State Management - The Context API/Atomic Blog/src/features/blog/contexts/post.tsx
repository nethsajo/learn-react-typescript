import { createRandomPost } from '@/features/blog/utils/create-random-post';
import { type Blog } from '@/types/blog';
import React, { useCallback, useContext, useMemo, useState } from 'react';

// 1. CREATE CONTEXT

type Children = {
  children: React.ReactNode;
};

type State = {
  blogs: Blog[];
  posts: Blog[];
  query: string;
  isToggle: boolean;
  onToggleForm: () => void;
  onSetQuery: (q: string) => void;
  onClearBlog: () => void;
  onSubmitBlog: (blog: Blog) => void;
};

const PostContext = React.createContext<State>({
  blogs: [],
  posts: [],
  query: '',
  isToggle: false,
  onToggleForm: () => {},
  onSetQuery: () => {},
  onClearBlog: () => {},
  onSubmitBlog: () => {},
});

const PostProvider = ({ children }: Children) => {
  const [query, setQuery] = useState('');
  const [isToggle, setIsToggle] = useState(false);
  //The callback function will only run in initial render
  const [blogs, setBlogs] = useState<Blog[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const handleSubmitBlog = useCallback((blog: Blog) => {
    setBlogs(blogs => [...blogs, blog]);
  }, []);

  const handleSetQuery = (q: string) => {
    setQuery(q);
  };

  const handleClearBlog = () => setBlogs([]);

  const handleToggleForm = () => setIsToggle(toggle => !toggle);

  // Derived state. These are the posts that will actually be displayed
  const filteredPosts = blogs.filter(blog =>
    `${blog.title} ${blog.body}`.toLowerCase().includes(query)
  );

  const posts = query.length > 0 ? filteredPosts : blogs;

  const value = useMemo(() => {
    return {
      blogs,
      posts,
      query,
      isToggle,
      onToggleForm: handleToggleForm,
      onSetQuery: handleSetQuery,
      onClearBlog: handleClearBlog,
      onSubmitBlog: handleSubmitBlog,
    };
  }, [blogs, handleSubmitBlog, isToggle, posts, query]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

const usePosts = () => {
  const context = useContext(PostContext);
  if (context === undefined) throw new Error('PostContext was used outside of the PostProvider');
  return context;
};

export { PostProvider, usePosts };
