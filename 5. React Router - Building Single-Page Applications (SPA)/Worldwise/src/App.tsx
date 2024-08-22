import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './components/layout/root';
import HomePage from './routes';
import AboutPage from './routes/about';
import AppPage from './routes/app';
import CitiesPage from './routes/cities';
import CountriesPage from './routes/countries';
import LoginPage from './routes/login';
import NotFoundPage from './routes/not-found';
import PricingPage from './routes/pricing';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<AboutPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/app" element={<AppPage />}>
            <Route index element={<CitiesPage />}></Route>
            <Route path="cities" element={<CitiesPage />}></Route>
            <Route path="countries" element={<CountriesPage />}></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
          {/* Will be matched if none of the other routes are matched */}
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </RootLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
