import React from 'react';
import CustomerOrders from '../../../components/template/CustomerOrders';
import useResquestItems from '../../../hooks/useResquestItems';

const Orders = () => {
  const requestParams = { endpoint: 'seller/orders', responseKey: 'orders' };
  const orders = useResquestItems(requestParams) || [];
  console.log(orders);
  return <CustomerOrders orders={ orders } />;
};

export default Orders;
