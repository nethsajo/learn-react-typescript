import { useEffect, useState } from 'react';
import { AddBlogForm } from './components/add-blog-form';
import { Archive } from './components/archive';
import { BlogList } from './components/blog-list';
import { Header } from './components/header';
import { PostProvider } from './contexts/post';

export default function AtomicBlog() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle('dark');
    },
    [isFakeDark]
  );

  return (
    <PostProvider>
      <div className="mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
        <Header isFakeDark={isFakeDark} onSetFakeDark={setIsFakeDark} />
        <AddBlogForm />
        <BlogList />
        <Archive show={false} />
      </div>
    </PostProvider>
  );
}
