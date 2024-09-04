import { type Blog } from '@/types/blog';

export type BlogProps = {
  blogs: Blog[];
};

export function BlogList({ blogs }: BlogProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {blogs.map((post, index) => {
        return (
          <div
            key={`post--${index}`}
            className="rounded-md border border-gray-200 p-4 hover:bg-gray-100"
          >
            <h2 className="mb-2 font-bold capitalize text-indigo-500">{post.title}</h2>
            <p className="text-gray-500">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
