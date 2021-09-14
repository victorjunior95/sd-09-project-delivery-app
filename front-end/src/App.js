import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginProvider } from './context/loginContext';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import OrderDetails from './pages/OrderDetails';
import SellerDetails from './pages/SellerDetails';
import AllOrders from './pages/AllOrders';

function App() {
  return (
    <LoginProvider>
      <div>
        <Switch>
          <Route path="/admin/manage" component={ Admin } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/seller/orders/:id" component={ SellerDetails } />
          <Route path="/seller/orders" component={ SellerOrders } />
          <Route path="/customer/checkout" component={ Checkout } />
          <Route path="/customer/orders/:id" component={ OrderDetails } />
          <Route path="/customer/orders" component={ AllOrders } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route
            exact
            path="/"
            render={ () => (<Redirect to="/login" />) }
          />
        </Switch>
      </div>
    </LoginProvider>
  );
}

export default App;
