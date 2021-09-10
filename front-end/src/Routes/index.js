import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  Login,
  Register,
  NotFound,
  Checkout,
} from '../Pages';
import OrderDetails from '../Pages/CustomerPages/OrderDetails';
import Orders from '../Pages/CustomerPages/Orders';
import Products from '../Pages/CustomerPages/Products';

import paths from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ paths.home } component={ HomePage } />
    <Route path={ paths.login } component={ Login } />
    <Route path={ paths.register } component={ Register } />
    <Route path={ paths.customer.products } component={ Products } />
    <Route exact path={ paths.customer.checkout } component={ Checkout } />
    <Route exact path={ paths.customer.orders } component={ Orders } />
    <Route path={ paths.customer.orderDetails } component={ OrderDetails } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
