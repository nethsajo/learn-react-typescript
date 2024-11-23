import React, { useEffect, useState } from 'react';
import { RootLayout } from './components/layout/root';
import AtomicBlog from './features/blog';
import { PostProvider } from './features/blog/contexts/post';

export default function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle('dark');
    },
    [isFakeDark]
  );

  return (
    <React.Fragment>
      <PostProvider>
        <RootLayout>
          <AtomicBlog isFakeDark={isFakeDark} setIsFakeDark={setIsFakeDark} />
        </RootLayout>
      </PostProvider>
    </React.Fragment>
  );
}
