import { AddBlogForm } from './components/add-blog-form';
import { BlogList } from './components/blog-list';
import { Header } from './components/header';
import { PostProvider } from './contexts/post';

export default function AtomicBlog() {
  return (
    <PostProvider>
      <div className="mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
        <Header />
        <AddBlogForm />
        <BlogList />
      </div>
    </PostProvider>
  );
}
