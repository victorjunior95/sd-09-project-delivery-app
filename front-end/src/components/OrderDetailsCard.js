import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import socket from '../services/api/socket';
/* import buttonChangeStatus from './buttonChangeStatus'; */

const DetailsCard = () => {
  const [lastOrders, setlastOrders] = useState([]);
  const [lastAllOrders, setAlllastOrders] = useState([]);
  const [infoSeller, setiInfoSeller] = useState([]);
  const [infoState, setInfoState] = useState('Pendente');
  const [disabled, setDisabled] = useState(true);
  console.log(lastOrders);

  const { id } = useParams();

  const defineDisabledButtons = (stateStatus) => {
    if (stateStatus === 'Em Trânsito') {
      setDisabled(false);
    } else setDisabled(true);
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: token,
  };
  const submitOrder = async () => {
    const orderBody = {
      method: 'GET',
      headers,
    };
    const theSale = await fetch(`http://localhost:3001/customer/orders/${id}`, orderBody);
    const theResponse = await theSale.json();
    console.log(theResponse.status);
    setInfoState(theResponse.status);
    const theSeller = await fetch(`http://localhost:3001/customer/orders/seller/${theResponse.sellerId}`, orderBody);
    const theResponseSeller = await theSeller.json();
    // console.log('Aqui', theResponseSeller);
    console.log('theResponse', theResponse);
    setiInfoSeller(theResponseSeller);
    setlastOrders(theResponse.products);
    setAlllastOrders(theResponse);
  };

  const submitOrderChangeStatus = async () => {
    socket.emit('changeStatusOrder', 'Entregue', id);
  };

  const rP = (numero) => {
    const x = String(numero).replace('.', ',');
    return x;
  };

  const formatDate = (data) => {
    const NUMBERMAX = 10;
    const NUMBERANO = 4;
    const NUMBERMES = 7;
    const NUMBERDIA = 8;
    const DATA = String(data).substring(0, NUMBERMAX);
    const ANO = DATA.substring(0, NUMBERANO);
    const MES = DATA.substring(NUMBERANO + 1, NUMBERMES);
    const DIA = DATA.substring(NUMBERDIA);
    const result = `${DIA}/${MES}/${ANO}`;
    return result;
  };

  useEffect(() => {
    defineDisabledButtons(infoState);
  }, [lastAllOrders]);

  useEffect(() => {
    socket.on('changeStatusOrder', (status, idFromSocket) => {
      if (idFromSocket === id) {
        setInfoState(status);
        defineDisabledButtons(status);
      }
    });

    submitOrder();
  }, []);

  const TESTID38 = 'customer_order_details__element-order-details-label-seller-name';
  const TESTID40 = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <div className="CheckoutCard-wrapper-table">
      <table className="CheckoutCard-table">
        <thead>
          <tr>
            <th>Detalhe do Pedido</th>
          </tr>
          <tr>
            <th
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              Pedido:
              { lastAllOrders.id }
            </th>
            <th
              data-testid={ TESTID38 }
            >
              Vendedor:
              { infoSeller.name }
            </th>
            <th
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              Data:
              { formatDate(lastAllOrders.saleDate) }
            </th>
            <th
              data-testid={ TESTID40 }
            >
              { infoState }
            </th>
            <button
              type="button"
              disabled={ disabled }
              data-testid="customer_order_details__button-delivery-check"
              onClick={ () => submitOrderChangeStatus() }
            >
              Marcar Como entregue
            </button>
          </tr>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { lastOrders.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                { element.name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { element.salesProducts.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { (element.price).replace(/\./, ',') }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-total-price-${index}`
                }
              >
                { rP(Number(element.price) * Number(element.salesProducts.quantity)) }
              </td>
            </tr>
          )) }
          <tr>
            <td />
            <td />
            <td />
            <th>Total</th>
            <th data-testid="customer_order_details__element-order-total-price">
              { rP(lastAllOrders.totalPrice) }
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DetailsCard;
