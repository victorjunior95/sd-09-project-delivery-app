import React from 'react';
import cleanup, {  fireEvent, waitFor  } from '@testing-library/react';
import renderWithRouter from './../helpers/renderWithRouter';
import renderWithContext from '../helpers/renderWithContext';
import App from './../../App';
import dataTestIds from '../../utils/dataTestIds';
import { admin } from '../helpers/user';
import {getCarrinhoLocalStorage} from '../../utils/storage'



describe("Tela /admin/manage", () => {

  const apiMockProducts = async () => {
    await getCarrinhoLocalStorage.mockImplementationOnce(() => Promise.resolve([]));
  };

  beforeEach(() => {
    window.localStorage.__proto__.getItem = jest.fn(() =>
      JSON.stringify(admin)
    );      
  });

  afterEach(async () => {
    cleanup;
    // await getCarrinhoLocalStorage.mockClear();
  }); 

  
  apiMockProducts();

  test("Verifica componentes tela de /admin/manage", async () => {
    const { getByText, getByTestId  } = renderWithContext(renderWithRouter(<App />,['/admin/manage']));
    await waitFor(() => expect(apiMockProducts).toHaveBeenCalledTimes(1));

    const btnUser = getByTestId(dataTestIds[12]);
    expect(btnUser).toBeInTheDocument();

    const btnSair = getByTestId(dataTestIds[14]);
    expect(btnSair).toBeInTheDocument();
  });
});