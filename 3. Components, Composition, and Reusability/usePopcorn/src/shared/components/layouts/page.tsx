import React from 'react';

import { Navbar } from '../partials/navbar';
import { Footer } from '../partials/footer';

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </React.Fragment>
  );
}
