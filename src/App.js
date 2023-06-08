import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Store from './components/Store';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={(props) => <Store />} />
        <Route
          path="/product/:id"
          Component={(props) => <Product />}
        />
        <Route>404 page</Route>
      </Routes>
    </Router>
  );
}

export default App;
