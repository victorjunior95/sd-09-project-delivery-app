import React from 'react';
import cleanup, {  fireEvent, waitFor  } from '@testing-library/react';
import renderWithRouter from './../helpers/renderWithRouter';
import renderWithContext from '../helpers/renderWithContext';
import App from './../../App';
import dataTestIds from '../../utils/dataTestIds';
import { customer } from '../helpers/user';
import {} from './../../utils/storage';
import Api from './../../services/api';
import {mockProducts} from './../helpers/mockProducts';

// afterEach(async () => {
//   cleanup;
//   await Api.getAllProducts.mockClear();
// });

// const apiMockProducts = async () => {
//   // await Api.getAllProducts.mockImplementationOnce(() => Promise.resolve(mockProducts));
//   await Api.getAllProducts(customer.token);
// };

describe("Tela customer/products", () => {

  beforeEach(() => {
   // apiMockProducts();
    window.localStorage.__proto__.getItem = jest.fn(() =>
      JSON.stringify(customer)
    );  
    
    window.localStorage.__proto__.setItem = jest.fn(() =>
    { carrinho: JSON.stringify([]) }
    );  
  });

 // apiMockProducts();

  test("Verifica componentes tela de customer/products", async () => {
    const { getByText, getByTestId  } = renderWithContext(renderWithRouter(<App />,['/customer/products']));
    //await waitFor(() => expect(apiMockProducts).toHaveBeenCalledTimes(1));

    const btnProducts = getByTestId(dataTestIds[11]);
    expect(btnProducts).toBeInTheDocument();

    const btnPedidos = getByTestId(dataTestIds[12]);
    expect(btnPedidos).toBeInTheDocument();

    const btnSair = getByTestId(dataTestIds[14]);
    expect(btnSair).toBeInTheDocument();
  });
});