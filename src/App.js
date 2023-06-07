import { useState, useEffect } from 'react';
import axios from 'axios';
import Store from '../src/components/Store'

function App() {
  const [storeItems, setStoreItem] = useState([
    {
      title: 'Computer',
      price: 2000,
    },
    {
      title: 'Books',
      price: 25,
    },
    {
      title: 'CD Games',
      price: 35,
    },
    {
      title: 'Keyboard',
      price: 1500,
    },
  ]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products');
  }, []);

  return (
    <Store
      items={storeItems}
      onItemAdd={(itemData) => {
        setStoreItem([...storeItems, itemData])
      }}
    />
  );
}

export default App;
