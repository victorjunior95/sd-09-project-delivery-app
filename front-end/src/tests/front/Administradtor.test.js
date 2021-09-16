import React from 'react';
import renderWithRouter from './../helpers/renderWithRouter';
import renderWithContext from '../helpers/renderWithContext';
import App from './../../App';
import dataTestIds from '../../utils/dataTestIds';
import { admin } from '../helpers/user';

describe("Tela /admin/manage", () => {

  beforeEach(() => {
    window.localStorage.__proto__.getItem = jest.fn(() =>
      JSON.stringify(admin)
    );      
  });

  test("Verifica componentes tela de /admin/manage", async () => {
    const { getByText, getByTestId  } = renderWithContext(renderWithRouter(<App />,['/admin/manage']));

    const btnUser = getByTestId(dataTestIds[12]);
    expect(btnUser).toBeInTheDocument();

    const btnSair = getByTestId(dataTestIds[14]);
    expect(btnSair).toBeInTheDocument();
  });
});