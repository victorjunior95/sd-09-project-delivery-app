import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

function OrderedCard({ data, index }) {
  const TEN = 10;

  return (
    <NavLink to={ `/customer/orders/${data.id}` }>
      <div
        key={ index }
        className="orders-cards"
      >
        <p
          data-testid={ `customer_orders__element-order-id-${data.id}` }
        >
          { `PEDIDO: ${data.id}` }
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${data.id}` }
        >
          status
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${data.id}` }
        >
          { `${data.saleDate.slice(0, TEN).split('-').reverse().join('/')}` }
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${data.id}` }
        >
          { `${data.totalPrice.replace('.', ',')}` }
        </p>
        <p
          data-testid={ `customer_orders__element-card-address-${data.id}` }
        >
          { `ENDEREÇO: ${data.deliveryAddress}, ${data.deliveryNumber}` }
        </p>
      </div>
    </NavLink>
  );
}

OrderedCard.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  index: PropTypes.string.isRequired,
};

export default OrderedCard;
