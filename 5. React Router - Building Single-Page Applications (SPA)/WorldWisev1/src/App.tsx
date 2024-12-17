import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RootLayout } from './components/layout/root';
import { ROUTES } from './constants/routes';
import { CitiesProvider } from './contexts/cities';
import { AuthProvider } from './contexts/fake-auth';
import { AddCityForm } from './features/app/cities/components/add-city-form';
// import HomePage from './routes';
// import AboutPage from './routes/about';
// import AppPage from './routes/app';
// import CitiesPage from './routes/cities';
// import CityPage from './routes/city';
// import CountriesPage from './routes/countries';
// import LoginPage from './routes/login';
// import NotFoundPage from './routes/not-found';
// import PricingPage from './routes/pricing';
// import ProtectedRoutePage from './routes/protected-route';

// dist/assets/index-dcb0ddcc.css   42.12 kB │ gzip:  11.36 kB
// dist/assets/index-8b5e55ca.js   375.00 kB │ gzip: 117.72 kB
import { lazy, Suspense } from 'react';
import { Spinner } from './components/elements/spinner';

const HomePage = lazy(() => import('./routes'));
const AboutPage = lazy(() => import('./routes/about'));
const AppPage = lazy(() => import('./routes/app'));
const CitiesPage = lazy(() => import('./routes/cities'));
const CityPage = lazy(() => import('./routes/city'));
const CountriesPage = lazy(() => import('./routes/countries'));
const LoginPage = lazy(() => import('./routes/login'));
const NotFoundPage = lazy(() => import('./routes/not-found'));
const PricingPage = lazy(() => import('./routes/pricing'));
const ProtectedRoutePage = lazy(() => import('./routes/protected-route'));

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          {/* Add this if using lazy component  */}
          <Suspense fallback={<Spinner />}>
            <RootLayout>
              <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />}></Route>
                <Route path={ROUTES.PRODUCT} element={<AboutPage />}></Route>
                <Route path={ROUTES.PRICING} element={<PricingPage />}></Route>
                <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
                <Route
                  path={ROUTES.APP}
                  element={
                    <ProtectedRoutePage>
                      <AppPage />
                    </ProtectedRoutePage>
                  }
                >
                  {/* Immediately navigate to the /cities using the Navigate component  */}
                  {/* In order to fix the back, we need to add the `replace` keyword  */}
                  {/* Replace - it will replace the current element in the history stack */}
                  <Route index element={<Navigate replace to={ROUTES.CITIES} />}></Route>
                  <Route path={ROUTES.CITIES} element={<CitiesPage />}></Route>
                  <Route path={`${ROUTES.CITIES}/:id`} element={<CityPage />}></Route>
                  <Route path={ROUTES.COUNTRIES} element={<CountriesPage />}></Route>
                  <Route path={ROUTES.FORM} element={<AddCityForm />}></Route>
                </Route>
                {/* Will be matched if none of the other routes are matched */}
                <Route path="*" element={<NotFoundPage />}></Route>
              </Routes>
            </RootLayout>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
