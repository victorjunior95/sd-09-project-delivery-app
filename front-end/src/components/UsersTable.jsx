import React from 'react';
import PropTypes from 'prop-types';
import dataTestIds from '../utils/dataTestIds';

function UsersTable({ list, handleRemove }) {
  const userTypes = {
    customer: 'Cliente',
    seller: 'P.Vendedora',
    administrator: 'Administrador',
  };

  return (
    <table className="table-container">
      <thead className="table-head">
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {list.map((user, index) => (
          <tr key={ index } className="table-tr">
            <td data-testid={ `${dataTestIds[70]}${index}` } className="t-item">
              {index + 1}
            </td>
            <td data-testid={ `${dataTestIds[71]}${index}` } className="t-desc w">
              {user.name}
            </td>
            <td
              data-testid={ `${dataTestIds[72]}${index}` }
              className="bg-green-dark"
            >
              {user.email}
            </td>
            <td
              data-testid={ `${dataTestIds[73]}${index}` }
              className="bg-purple"
            >
              {userTypes[user.role]}
            </td>
            <td>
              <button
                data-testid={ `${dataTestIds[74]}${index}` }
                type="button"
                value={ user.id }
                onClick={ handleRemove }
                className="table-btn bg-blue hover:bg-blue-400"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default UsersTable;
