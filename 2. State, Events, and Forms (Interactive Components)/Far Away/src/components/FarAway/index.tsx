import { useState } from 'react';

import { Form } from './components/Form';
import { Header } from './components/Header';
import { type Item } from './components/Item.types';
import { Items } from './components/Items';

export default function FarAway() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems(currentItems => [...currentItems, item]);
  };

  return (
    <div className="flex w-full flex-col">
      <Header />
      <Form onAddItem={handleAddItem} />
      <Items items={items} />
    </div>
  );
}
