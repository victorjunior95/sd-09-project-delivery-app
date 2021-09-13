import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';
import NavBar from '../components/NavBar';
import { getOrderById } from '../services/api';

const CustomerDetails = () => {
  const [order, setOrder] = useState([]);
  const [error, setError] = useState(false);
  const [disabled, setDisable] = useState(false);
  const { products, totalPrice } = order;

  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));

  const orderDetails = {
    id,
    token: user.token,
  };

  useEffect(() => {
    getOrderById(orderDetails, setOrder, setError);
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
          {moment(order.saleDate).format('DD/MM/YY')}
        </li>
        <li
          ref={ useRef() }
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { order.status }
        </li>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ () => setDisable(true) }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ disabled }
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

export default CustomerDetails;
