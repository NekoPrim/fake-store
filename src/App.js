import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Store from './components/_tore';

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
            path='/'
            exact
            component={(props) => (
              <Store
                items={storeItems}
                loading={loading}
                onItemAdd={(itemData) => {
                  setStoreItems([...storeItems, itemData])
                }}
              />
            )} 
          />
          <Route>404 page</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
