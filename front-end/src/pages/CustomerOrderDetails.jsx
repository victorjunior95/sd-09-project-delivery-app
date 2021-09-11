import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/CustomerOrderDetails.css';
import io from 'socket.io-client';
import dataTestIds from '../utils/dataTestIds';
import api from '../services/api';
import Navbar from '../components/Navbar';
import ProductsTable from '../components/ProductsTable';
import transformDate from '../utils/transformDate';
import CardTotal from '../components/CardTotal';
import transformOrderNumber from '../utils/transformOrderNumber';

const socket = io.connect('http://localhost:3002/');

function CustomerOrderDetails() {
  // Ver como fazer um 'custom react Hook para reutilizar'
  const history = useHistory();
  const { location: { pathname } } = history;
  const orderId = pathname.split('/')[3];

  const [myOrder, setMyOrder] = useState({});
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem('user'));
  const getSale = async (id) => {
    const result = await api.getSaleById(id);
    const newDate = transformDate(result.saleDate);
    const newPrice = result.totalPrice.replace('.', ',');
    setMyOrder({ ...result, saleDate: newDate, totalPrice: newPrice });
    setLoading(false);
    return result;
  };

  const getSaleItems = async (id) => {
    const result = await api.getSaleItems(id);
    setMyItems(result.products);
  };

  useEffect(() => {
    getSale(orderId);
    getSaleItems(orderId);
  }, [orderId]);

  const customerDataTestIds = [
    dataTestIds[41],
    dataTestIds[42],
    dataTestIds[43],
    dataTestIds[44],
    dataTestIds[45],
  ];

  const clickChangeSaleStatus = async (event) => {
    const status = event.target.value;
    await api.changeOrderStatus(myOrder.id, status);
    getSale(orderId);
    socket.emit('updateFromCustomer');
  };

  socket.on('updateCustomer', () => {
    getSale(orderId);
  });

  if (loading) {
    return (
      <p> Carregando ...</p>
    );
  }
  return (
    <div>
      <Navbar role={ userData.role } />

      <div className="container-box">
        <p className="mt-10 title-box">Detalhe do Pedido</p>
        <div className="head-pedido">
          <p data-testid={ dataTestIds[37] }>
            { transformOrderNumber(myOrder.id) }
          </p>
          <p data-testid={ dataTestIds[38] }>
            { myOrder['seller.name'] }
          </p>
          <p data-testid={ dataTestIds[39] }>
            { myOrder.saleDate }
          </p>
          <p data-testid={ dataTestIds[40] }>
            { myOrder.status }
          </p>
          {/* Esse botão vai ter que ser utilizado na hora de fazer o socket */}
          <button
            type="button"
            data-testid={ dataTestIds[47] }
            disabled={ myOrder.status !== 'Em Trânsito' }
            value="Entregue"
            onClick={ clickChangeSaleStatus }
            className="btn-entregue"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <div className="box-border-90 flex-col">
          <ProductsTable listItems={ myItems } testIds={ customerDataTestIds } />
          <CardTotal
            dataTestId={ dataTestIds[46] }
            totalCart={ `${myOrder.totalPrice}` }
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerOrderDetails;
