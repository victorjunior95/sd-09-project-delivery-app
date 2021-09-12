import React from 'react';
import styled from 'styled-components';
import { Main } from '../atoms';
import NavBar from '../organisms/NavBar';
import { productsArrayPropTypes } from '../../utils/propTypes';
import CartTotalButton from '../molecules/CartTotalButton';
import OrderInfo from '../organisms/OrderInfo';

const CustomerOrderDetails = ({ className, order }) => (
  <>
    <NavBar />
    <Main className={ className }>
      <OrderInfo order={ order } />
    </Main>
  </>
);

export default styled(CustomerOrderDetails)`
  margin: 10vh 0 10vh 0;
  padding: 0 0 100vh 0;
  display: grid;
  padding: 3% 8%;
  height: 100%;
  /* background-color: #eaf1ef; */

  ${CartTotalButton} {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;

CustomerOrderDetails.propTypes = productsArrayPropTypes;
