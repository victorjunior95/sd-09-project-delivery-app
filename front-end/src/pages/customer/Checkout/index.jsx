import React from 'react';
// import CustomerCheckout from '../../../components/template/CustomerCheckout';
import CustomerOrderDetails from '../../../components/template/CustomerOrderDetails';
import { useCustomRoleDataContext } from '../../../context/contexts';

const Checkout = () => {
  const { cart } = useCustomRoleDataContext() || [];
  const products = Object.values(cart);
  return <CustomerOrderDetails order={ products } />;
};

export default Checkout;
