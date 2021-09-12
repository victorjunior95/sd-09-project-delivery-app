import React from 'react';
import styled from 'styled-components';
import { Main } from '../atoms';
import NavBar from '../organisms/NavBar';
import { productsArrayPropTypes } from '../../utils/propTypes';
import CheckoutForm from '../organisms/CheckoutForm';

const CustomerCheckout = ({ className }) => (
  <>
    <NavBar />
    <Main className={ className }>
      <CheckoutForm />
    </Main>
  </>
);

export default styled(CustomerCheckout)`
  margin: 10vh 0 10vh 0;
  padding: 0 0 100vh 0;
  display: grid;
  grid-template-rows: 10vh 90vh;
  padding: 3% 8%;
  height: 100%;
`;

CustomerCheckout.propTypes = productsArrayPropTypes;
