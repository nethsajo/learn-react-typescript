import { Route, Routes } from 'react-router-dom';
import HomePage from './routes';
import NotFoundPage from './routes/not-found';
import PricingPage from './routes/pricing';
import ProductPage from './routes/product';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      {/* Will be matched if none of the other routes are matched */}
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
