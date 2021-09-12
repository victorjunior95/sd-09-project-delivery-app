import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, Cell, Row } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { productNamePropTypes } from '../../utils/propTypes';
import roundDecimals from '../../utils/roundDecimals';
import convertDecimalsToString from '../../utils/convertDecimalsToString';
import { useCustomRoleActionContext, useUserDataContext } from '../../context/contexts';
import useDetectPage from '../../hooks/useDetectPage';
import getTestIds from '../../utils/getTestIds';

const CenteredTextCell = styled(Cell)`
  text-align: center;
`;
const ItemNumber = styled(CenteredTextCell)``;

const Name = styled(Cell)``;

const Quantity = styled(CenteredTextCell)``;

const UnitPrice = styled(CenteredTextCell)``;

const SubTotal = styled(CenteredTextCell)``;

const Remove = styled(CenteredTextCell)``;

const RemoveButton = styled(Button)``;

const OrderRow = ({
  className,
  name,
  price,
  quantity,
  index,
  id,
}) => {
  const subTotal = roundDecimals(quantity * Number(price));
  const displayedSubTotal = convertDecimalsToString(subTotal);
  const displayedPrice = convertDecimalsToString(price);
  const { isCheckout } = useDetectPage();
  const { setCartProduct } = useCustomRoleActionContext();
  const { role } = useUserDataContext();
  const testIds = getTestIds(role, isCheckout ? 'checkout' : 'orderDetails');

  const removeProduct = useCallback(
    () => {
      setCartProduct({ id, quantity: 0 });
    },
    [],
  );

  return (
    <Row className={ className }>
      <ItemNumber data-testid={ testIds.productIndex(index) }>{ index + 1 }</ItemNumber>
      <Name data-testid={ testIds.productName(index) }>{ name }</Name>
      <Quantity data-testid={ testIds.productQuantity(index) }>{ quantity }</Quantity>
      <UnitPrice>
        { 'R$ ' }
        <span data-testid={ testIds.productUnitPrice(index) }>{ displayedPrice }</span>
      </UnitPrice>
      <SubTotal>
        { 'R$ ' }
        <span data-testid={ testIds.productSubTotal(index) }>{ displayedSubTotal }</span>
      </SubTotal>
      { isCheckout && (
        <Remove>
          <RemoveButton
            onClick={ removeProduct }
            data-testid={ testIds.productRemoveButton(index) }
          >
            Remover
          </RemoveButton>
        </Remove>
      ) }
    </Row>
  );
};

export default styled(OrderRow)`
  color: ${getThemeColor('dark')};
`;

OrderRow.propTypes = productNamePropTypes;
