import React from 'react';
import PropTypes from 'prop-types';
// import dataTestIds from '../utils/dataTestIds';

function ProductsTable({ listItems, testIds }) {
  const rows = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

  return (
    <table className="table-container">
      <thead className="table-head">
        <tr>
          {rows.map((item, index) => (
            <th key={ index }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {listItems.map((item, index) => (
          <tr key={ index } className="table-tr">
            <td data-testid={ `${testIds[0]}${index}` } className="t-item">
              {index + 1}
            </td>
            <td data-testid={ `${testIds[1]}${index}` } className="t-desc w-1/2">
              {item.name}
            </td>
            <td data-testid={ `${testIds[2]}${index}` } className="bg-green-dark w-8">
              {item.salesProducts.quantity}
            </td>
            <td
              data-testid={ `${testIds[3]}${index}` }
              className="bg-purple"
            >
              {`R$${item.price}`}

            </td>
            <td data-testid={ `${testIds[4]}${index}` } className="bg-blue">
              {`R$${(item.price * item.salesProducts.quantity).toFixed(2)}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductsTable.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  testIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductsTable;
