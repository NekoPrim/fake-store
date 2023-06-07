import { useState, useEffect } from 'react';
import axios from 'axios';
import Store from '../src/components/Store';

function App() {
  const [storeItems, setStoreItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(({data}) => {
      setLoading(false);
      setStoreItems(data);
    });
  }, []);


  return (
    <Store
      items={storeItems}
      loading={loading}
      onItemAdd={(itemData) => {
        setStoreItems([...storeItems, itemData])
      }}
    />
  );
}

export default App;
