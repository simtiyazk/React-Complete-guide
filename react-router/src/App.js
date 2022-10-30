import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import NavHeader from './components/NavHeader';
import ProductDetails from './pages/ProductDetail';

function App() {
  return (
    <div>
      <NavHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
