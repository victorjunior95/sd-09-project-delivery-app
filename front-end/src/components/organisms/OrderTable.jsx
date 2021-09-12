import React from 'react';
import styled from 'styled-components';

import { Row, Table, TableHeader } from '../atoms';
import generateKey from '../../utils/uniqueKeyGenerator';
import { productsArrayPropTypes } from '../../utils/propTypes';
import OrderRow from '../molecules/OrderRow';
import useDetectPage from '../../hooks/useDetectPage';

const OrderTable = ({ className, products = [] }) => {
  const { isCheckout } = useDetectPage();

  return (
    <Table className={ className }>
      <Row>
        <TableHeader>Item</TableHeader>
        <TableHeader>Descrição</TableHeader>
        <TableHeader>Quantidade</TableHeader>
        <TableHeader>Valor Unitário</TableHeader>
        <TableHeader>Sub-total</TableHeader>
        { isCheckout && <TableHeader>Remover Item</TableHeader> }
      </Row>
      { products.map((product, index) => {
        const { id, name, price, salesProduct } = product;
        const quantity = salesProduct ? salesProduct.quantity : product.quantity;
        return (
          <OrderRow
            product={ product }
            index={ index }
            id={ id }
            name={ name }
            price={ price }
            quantity={ quantity }
            key={ generateKey() }
          />
        );
      }) }
    </Table>
  );
};

export default styled(OrderTable)`
  ${TableHeader} {
    font-weight: 400;
    font-size: .9rem;
  }
`;

OrderTable.propTypes = productsArrayPropTypes;
