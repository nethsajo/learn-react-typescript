import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="flex items-center space-x-4 bg-orange-500">
      <Link to="/">Home</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/product">Product</Link>
    </div>
  );
}
