import { usePosts } from '../contexts/post';
// import { Test } from './test';

export function BlogList() {
  const { posts } = usePosts();

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, index) => {
          return (
            <div
              key={`post--${index}`}
              className="rounded-md border border-gray-200 p-4 hover:bg-gray-100 dark:border-0 dark:bg-indigo-200 dark:hover:bg-indigo-100"
            >
              <h2 className="mb-2 font-bold capitalize text-indigo-500">{post.title}</h2>
              <p className="text-gray-500 dark:text-gray-600">{post.body}</p>
            </div>
          );
        })}
      </div>
      {/* <Test /> */}
    </>
  );
}
