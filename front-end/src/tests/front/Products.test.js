import React from 'react';
import renderWithRouter from './../helpers/renderWithRouter';
import renderWithContext from '../helpers/renderWithContext';
import App from './../../App';
import dataTestIds from '../../utils/dataTestIds';
import { customer } from '../helpers/user';

describe("Tela customer/products", () => {

  beforeEach(() => {
    window.localStorage.__proto__.getItem = jest.fn(() =>
      JSON.stringify(customer)
    );  
  });

  test("Verifica componentes tela de customer/products", async () => {
    const { getByTestId  } = renderWithContext(renderWithRouter(<App />,['/customer/products']));

    const btnProducts = getByTestId(dataTestIds[11]);
    expect(btnProducts).toBeInTheDocument();

    const btnPedidos = getByTestId(dataTestIds[12]);
    expect(btnPedidos).toBeInTheDocument();

    const btnSair = getByTestId(dataTestIds[14]);
    expect(btnSair).toBeInTheDocument();
  });
});