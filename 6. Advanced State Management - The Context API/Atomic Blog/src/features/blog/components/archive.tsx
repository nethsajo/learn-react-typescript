import { memo, useState } from 'react';
import { createRandomPost } from '../utils/create-random-post';

export const Archive = memo(function Archive({ show }: { show: boolean }) {
  const [posts] = useState(() => Array.from({ length: 30000 }, () => createRandomPost()));
  const [showArchive, setShowArchive] = useState(show);

  return (
    <aside>
      <h2>Post Archive</h2>
      <button onClick={() => setShowArchive(shown => !shown)}>
        {showArchive ? 'Hide archive posts' : 'Show archive posts'}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}</strong> {post.body}
              </p>
              {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});
