import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './components/layout/root';
import HomePage from './routes';
import AboutPage from './routes/about';
import LoginPage from './routes/login';
import NotFoundPage from './routes/not-found';
import PricingPage from './routes/pricing';

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<AboutPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        {/* Will be matched if none of the other routes are matched */}
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </RootLayout>
  );
}
