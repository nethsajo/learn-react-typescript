import { Input } from '@/components/ui/input';
import { ROUTES } from '@/constants/routes';
import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!query) return;
    navigate(`${ROUTES.ORDER}/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        variant="outline"
        name="search-order"
        placeholder="Search order number"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
};
