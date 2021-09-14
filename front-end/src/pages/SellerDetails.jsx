import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';
import NavBar from '../components/NavBar';
import { getOrderById } from '../services/api';
import socket from '../services/api/socket';

const SellerDetails = () => {
  const [order, setOrder] = useState([]);
  const [error, setError] = useState(false);
  const [disabled, setDisable] = useState(true);
  const [prepareDisable, setPrepareDisable] = useState(false);
  const [statusOrder, setStatusOrder] = useState('');
  const { products, totalPrice } = order;

  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));

  const orderDetails = {
    id,
    token: user.token,
  };

  const defineDisabledButtons = (currentStatus) => {
    if (currentStatus === 'Pendente') {
      setPrepareDisable(false);
      setDisable(true);
    } else if (currentStatus === 'Preparando') {
      setPrepareDisable(true);
      setDisable(false);
    } else {
      setPrepareDisable(true);
      setDisable(true);
    }
  };

  useEffect(() => {
    if (order.status !== undefined) {
      defineDisabledButtons(statusOrder);
    }
  }, [order, statusOrder]);

  useEffect(() => {
    socket.on('changeStatusOrder', (status, idFromSocket) => {
      if (idFromSocket === id) {
        setStatusOrder(status);
        defineDisabledButtons(status);
      }
    });
    getOrderById(orderDetails, setOrder, setError, setStatusOrder);
  }, []);

  return (
    <div>
      <NavBar userType="seller" userName="Fulana Pereira" />
      {error ? <h1>{error}</h1> : <h3>Detalhe do Pedido</h3>}
      <ul>
        <li data-testid="seller_order_details__element-order-details-label-order-id">
          {`Pedido 000${order.id}`}
        </li>
        <li data-testid="seller_order_details__element-order-details-label-order-date">
          {moment(order.saleDate).format('DD/MM/YYYY')}
          {/* Estava moment(order.saleDate).format('DD/MM/YY')  */}
        </li>
        <li
          ref={ useRef() }
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { statusOrder === 'Pendente' ? order.status : statusOrder }
        </li>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ prepareDisable }
          onClick={ () => socket.emit('changeStatusOrder', 'Preparando', id) }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ disabled }
          onClick={ () => socket.emit('changeStatusOrder', 'Em Trânsito', id) }
        >
          SAIU PARA ENTREGA
        </button>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product, index) => {
            const { quantity } = product.salesProducts;
            const subTotal = (quantity * product.price).toFixed(2);
            return (
              <tr key={ index }>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {quantity}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {`R$ ${product.price.replace('.', ',')}`}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {`R$ ${subTotal.replace('.', ',')}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {totalPrice ? (
        <span data-testid="seller_order_details__element-order-total-price">
          {`Total: R$ ${order.totalPrice.replace('.', ',')}`}
        </span>
      ) : null}
    </div>
  );
};

export default SellerDetails;
