import React from 'react';
import { RootLayout } from './components/layout/root';
import AtomicBlog from './features/blog';

export default function App() {
  return (
    <React.Fragment>
      <RootLayout>
        <AtomicBlog />
      </RootLayout>
    </React.Fragment>
  );
}
