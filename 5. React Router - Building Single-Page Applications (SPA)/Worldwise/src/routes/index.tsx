import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Home page</h1>
      <Link to="/pricing">Go to pricing</Link>
    </div>
  );
}
