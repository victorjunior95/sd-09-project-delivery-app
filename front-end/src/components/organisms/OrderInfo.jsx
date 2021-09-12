import React from 'react';
import styled from 'styled-components';
import { Label, Wrapper } from '../atoms';
import { onlyClassNamePropTypes } from '../../utils/propTypes';
import OrderTable from './OrderTable';
import OrderStatusBar from './OrderStatusBar';
import CheckoutForm from './CheckoutForm';
import { useCustomRoleDataContext, useUserDataContext } from '../../context/contexts';
import convertDecimalsToString from '../../utils/convertDecimalsToString';
import useDetectPage from '../../hooks/useDetectPage';
import getTestIds from '../../utils/getTestIds';

const Total = styled(Label)``;

const OrderInfo = ({ className, order }) => {
  const { isCheckout, isOrderDetails } = useDetectPage();
  const products = isCheckout ? order : order.products;
  const { role } = useUserDataContext();
  const testIds = getTestIds(role, isCheckout ? 'checkout' : 'orderDetails');
  const { id, seller, saleDate, status, totalPrice } = order;
  const { total } = useCustomRoleDataContext();
  const displayedTotal = convertDecimalsToString(totalPrice || total);

  return (
    <Wrapper className={ className }>
      { isOrderDetails && <OrderStatusBar { ...{ id, seller, saleDate, status } } /> }
      <OrderTable { ...{ products } } />
      <Total>
        { 'Total: R$ ' }
        <span data-testid={ testIds.totalPrice }>{ displayedTotal }</span>
      </Total>
      { isCheckout && <CheckoutForm /> }
    </Wrapper>
  );
};

export default styled(OrderInfo)`
  display: grid;
  /* background-color: black; */
  /* grid-template-columns: repeat(auto-fit, minmax(20%, 1fr)); */
  grid-template-rows: repeat(auto-fit, 1fr);
  width: 100%;
  /* justify-content: center; */
  /* align-content: center; */
  /* align-items: center; */
`;

OrderInfo.propTypes = onlyClassNamePropTypes;
