import { Route, Routes } from 'react-router-dom';
import { RootLayout } from 'shared/components/layouts/root';

import HomePage from './pages';

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </RootLayout>
  );
}
