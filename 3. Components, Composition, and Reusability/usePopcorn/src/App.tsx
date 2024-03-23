import { Route, Routes } from 'react-router-dom';
import { RootLayout } from 'shared/components/layouts/root';
import { ROUTES } from 'shared/constants/commons';

import HomePage from './pages';
import NotFoundPage from './pages/not-found';
import PopularPage from './pages/popular';
import TopRatedPage from './pages/top-rated';
import UpcomingPage from './pages/upcoming';

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path={ROUTES.POPULAR} element={<PopularPage />} />
        <Route path={ROUTES.TOPRATED} element={<TopRatedPage />} />
        <Route path={ROUTES.UPCOMING} element={<UpcomingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}
