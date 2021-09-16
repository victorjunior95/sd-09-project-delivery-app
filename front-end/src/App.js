import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import Provider from './context/Provider';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrderDetails from './pages/SellerOrderDetails';
import OrdersPage from './pages/OrdersPage';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route exact path="/">
            <Redirect to="/login" component={ Login } />
          </Route>
          <Route path="/register" component={ Register } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/customer/checkout" component={ Checkout } />
          <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
          <Route path="/customer/orders" component={ OrdersPage } />
          <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
          <Route path="/seller/orders" component={ OrdersPage } />
          <Route path="/admin/manage" component={ Admin } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
