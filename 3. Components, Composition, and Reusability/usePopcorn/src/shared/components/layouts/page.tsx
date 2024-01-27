import React from 'react';

import { Footer } from '../partials/footer';
import { Navbar } from '../partials/navbar';

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </React.Fragment>
  );
}
