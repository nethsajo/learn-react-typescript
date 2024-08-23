import { useParams } from 'react-router-dom';

export default function CityPage() {
  /**
   * In order to get that data (params) from the URL
   * We can use the hook `useParams` provided by the React Router
   */

  const { id } = useParams();

  return <div>City Page {id}</div>;
}
