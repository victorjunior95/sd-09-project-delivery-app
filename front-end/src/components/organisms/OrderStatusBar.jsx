import React from 'react';
import styled from 'styled-components';
import { Button, Wrapper } from '../atoms';
import { onlyClassNamePropTypes } from '../../utils/propTypes';
import OrderStatus from '../molecules/OrderStatus';
import Date from '../molecules/Date';
import OrderId from '../molecules/OrderId';
import OrderSellerName from '../molecules/OrderSellerName';
import OrderButtonGroup from '../molecules/OrderButtonGroup';

const OrderStatusBar = ({ className, id, seller, saleDate, status }) => (
  <Wrapper className={ className }>
    <OrderId id={ id } />
    <OrderSellerName name={ seller.name } />
    <Date fullYear date={ saleDate } />
    <OrderStatus status={ status } data-testid="unset" />
    <OrderButtonGroup />
  </Wrapper>
);

export default styled(OrderStatusBar)`
  display: grid;
  height: 50px;
  /* background-color: black; */
  /* grid-template-columns: repeat(auto-fit, minmax(20%, 1fr)); */
  grid-template-columns: 1fr 1fr .5fr .7fr 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;

  ${OrderButtonGroup} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  ${OrderButtonGroup} ${Button} {
    width: 80%;
    text-transform: uppercase;
    font-size: .9rem;
    border-radius: 5px;
  }

  ${OrderSellerName}, ${OrderId} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: transparent;
  }

  ${OrderSellerName} {
    font-size: 1.2rem;
  }

  ${OrderId} div {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;

    :last-of-type {
      margin-left: 10px;
    }
  }

  ${OrderStatus} {
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 5px;
    /* font-size: 1rem; */
  }
`;

OrderStatusBar.propTypes = onlyClassNamePropTypes;
