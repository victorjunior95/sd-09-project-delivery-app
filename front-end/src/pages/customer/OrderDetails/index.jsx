import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerOrderDetails from '../../../components/template/CustomerOrderDetails';
import useResquestItems from '../../../hooks/useResquestItems';
import Loader from '../../Loader';

const OrderDetails = () => {
  const { id } = useParams();
  const requestParams = {
    endpoint: `customer/orders/${id}`,
    responseKey: 'order',
    initialState: null,
  };
  const order = useResquestItems(requestParams);

  return !order
    ? <Loader />
    : <CustomerOrderDetails order={ order } />;
};

export default OrderDetails;
