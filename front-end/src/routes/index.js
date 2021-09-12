import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { common, costumer, seller } from '../pages';

import paths from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ paths.home } component={ common.Home } />
    <Route path={ paths.login } component={ common.Login } />
    <Route path={ paths.register } component={ common.Register } />
    <Route path={ paths.customer.products } component={ costumer.Products } />
    <Route exact path={ paths.customer.checkout } component={ costumer.Checkout } />
    <Route exact path={ paths.customer.orders } component={ costumer.Orders } />
    <Route path={ paths.customer.orderDetails } component={ costumer.OrderDetails } />
    <Route exact path={ paths.seller.orders } component={ seller.Orders } />
    <Route path={ paths.seller.orderDetails } component={ seller.OrderDetails } />
    <Route component={ common.NotFound } />
  </Switch>
);

export default Routes;
