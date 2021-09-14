import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataTestIds from '../utils/dataTestIds';
import transformDate from '../utils/transformDate';
import { getColorStatus } from '../utils/colorsStatus';
import transformOrderNumber from '../utils/transformOrderNumber';

function OrderCard({ sale }) {
  const {
    role,
    id,
    totalPrice: price,
    deliveryAddress: adress,
    deliveryNumber: addressNumber,
    saleDate: date,
    status,
  } = sale;

  const statusDiv = (userRole) => (
    <div className={ `pedido-data-value-status ${getColorStatus(status)}` }>
      <p
        data-testid={
          userRole === 'seller'
            ? `${dataTestIds[49]}${id}`
            : `${dataTestIds[34]}${id}`
        }
      >
        { status }
      </p>
    </div>
  );

  const addressDiv = () => (
    <p
      data-testid={ `${dataTestIds[52]}${id}` }
      className="flex justify-end text-sm mr-1.5"
    >
      {`${adress}, ${addressNumber}`}
    </p>
  );

  const dataValueDiv = () => (
    <div className="pedido-item-data-value">
      <p
        data-testid={
          role === 'seller'
            ? `${dataTestIds[50]}${id}`
            : `${dataTestIds[35]}${id}`
        }
        className="pedido-data-value-item"
      >
        { transformDate(date) }
      </p>
      <p
        data-testid={
          role === 'seller'
            ? `${dataTestIds[51]}${id}`
            : `${dataTestIds[36]}${id}`
        }
        className="pedido-data-value-item"
      >
        { price.replace('.', ',') }
      </p>
    </div>
  );

  return (
    <Link to={ `/${role}/orders/${id}` } className="content-card-pedido-item">
      <div>
        <div className="pedido-item-data">
          <div className="pedido-item-data-num text-sm text-center">
            <p
              data-testid={
                role === 'seller'
                  ? `${dataTestIds[48]}${id}`
                  : `${dataTestIds[33]}${id}`
              }
            >
              { `Pedido: ${transformOrderNumber(id)}` }
            </p>
          </div>
          <div className="flex flex-col w-4/5">
            <div className="flex w-full">
              { statusDiv(role) }
              { dataValueDiv() }
            </div>
            { role === 'seller' && addressDiv() }
          </div>
        </div>

      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    role: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
