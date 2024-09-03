import { AddBlog } from './components/add-blog';
import { Header } from './components/header';

export default function AtomicBlog() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-8 px-4 py-12 sm:px-6">
      <Header />
      <AddBlog />
    </div>
  );
}
