import React from 'react';
import styled from 'styled-components';
import { Main } from '../atoms';
import NavBar from '../organisms/NavBar';
import { productsArrayPropTypes } from '../../utils/propTypes';
import OrdersList from '../organisms/OrdersList';

const CustomerOrders = ({ className, orders }) => (
  <>
    <NavBar />
    <Main className={ className }>
      <OrdersList products={ orders } />
    </Main>
  </>
);

export default styled(CustomerOrders)`
  margin: 10vh 0 10vh 0;
  padding: 0 0 100vh 0;
  display: grid;
  grid-template-rows: 10vh 90vh;
  padding: 3% 8%;
  height: 100%;
`;

CustomerOrders.propTypes = productsArrayPropTypes;
