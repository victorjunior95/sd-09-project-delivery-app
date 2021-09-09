import React from 'react';

const DetailsCard = () => (
  <div className="CheckoutCard-wrapper-table">
    <table className="CheckoutCard-table">
      <thead>
        <tr>
          <th>Detalhe do Pedido</th>
        </tr>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
    </table>
  </div>
);
export default DetailsCard;
