import { useState } from 'react';

import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { type Item } from './components/Item.types';
import { Items } from './components/Items';

export default function FarAway() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems(currentItems => [...currentItems, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const handlePackItem = (id: number) => {
    setItems(currentItems =>
      currentItems.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className="grid h-screen w-full grid-rows-[auto_auto_1fr_auto]">
      <Header title="Far Away" />
      <Form onAddItem={handleAddItem} />
      <Items
        items={items}
        onPackItem={handlePackItem}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
