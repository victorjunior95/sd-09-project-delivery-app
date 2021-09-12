import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms';
import { productNamePropTypes } from '../../utils/propTypes';

const OrderSellerName = ({ className, name, testid }) => (
  <Label className={ className }>
    <div>P. Vend:</div>
    <div data-testid={ testid }>{ name }</div>
  </Label>
);

export default styled(OrderSellerName)`
  background-color: white;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

OrderSellerName.propTypes = productNamePropTypes;
