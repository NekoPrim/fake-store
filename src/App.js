import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Store from './components/Store';
import Product from './components/Product';

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
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            Component={(props) => (
              <Store
                title="store"
                items={storeItems}
                loading={loading}
                onItemAdd={(itemData) => {
                  setStoreItems([...storeItems, itemData])
                }}
              />
            )} 
          />
          <Route
            path="/product/:id"
            Component={(props) => <Product {...props} />}
          />
          <Route>404 page</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
