import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import LargeButton from './LargeButton';
import testIds from '../utils/dataTestIds';
import {
  setCarrinhoLocalStorage,
  getTotalCartLocalStorage,
} from '../utils/storage';

function ProductsTable({ cartData }) {
  const { setTotalCart } = useContext(AppContext);

  function handleRemove(i) {
    const RemoveCartData = {
      productId: i,
      quantity: 0,
    };
    setCarrinhoLocalStorage(RemoveCartData);
    setTotalCart(getTotalCartLocalStorage());
  }

  return (
    <table className="table-container">
      <thead className="table-head">
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {cartData.map((item, index) => (
          <tr key={ index } className="table-tr">
            <td className="t-item" data-testid={ testIds[22] + index }>
              {index + 1}
            </td>
            <td className="t-desc w-1/2" data-testid={ testIds[23] + index }>
              {item.name}
            </td>
            <td className="bg-green-dark" data-testid={ testIds[24] + index }>
              {item.quantity}
            </td>
            <td className="bg-purple">
              {'R$ '}
              <span data-testid={ testIds[25] + index }>
                {item.unitPrice.replace('.', ',')}
              </span>
            </td>
            <td className="bg-blue">
              {'R$ '}
              <span data-testid={ testIds[26] + index }>
                {item.subTotal.replace('.', ',')}
              </span>
            </td>
            <td>
              <LargeButton
                buttonText="Remover"
                onClick={ () => handleRemove(item.productId) }
                dataTestId={ testIds[27] + index }
                classStyle="table-btn bg-green-ligth"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductsTable.propTypes = {
  cartData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductsTable;
