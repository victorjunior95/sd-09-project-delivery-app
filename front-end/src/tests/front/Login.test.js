import React from 'react';
import {  fireEvent } from '@testing-library/react';
import renderWithRouter from './../helpers/renderWithRouter';
import renderWithContext from '../helpers/renderWithContext';
import App from './../../App';
import dataTestIds from '../../utils/dataTestIds';

describe('Tela Login', () => {

  test('Verifica componentes tela de Login', async () => {
    const { getByText, getByTestId  } = renderWithContext(renderWithRouter(<App />,['/login']));

    const home = getByText('Bem vindo(a)!');
    expect(home).toBeInTheDocument();

    const inputLogin = getByTestId(dataTestIds[1]);
    expect(inputLogin).toBeInTheDocument();

    fireEvent.change(inputLogin, { target: { value: 'ana@gmail.com' } });
    expect(inputLogin.value).toEqual('ana@gmail.com');

    const inputPassword = getByTestId(dataTestIds[2]);
    expect(inputPassword).toBeInTheDocument();

    fireEvent.change(inputPassword, { target: { value: 'senha123456' } });
    expect(inputPassword.value).toEqual('senha123456');

    const ButtonLogin = getByTestId(dataTestIds[3]);
    expect(ButtonLogin).toBeInTheDocument();

    const ButtonRegister = getByTestId(dataTestIds[4]);
    expect(ButtonRegister).toBeInTheDocument();

    fireEvent.click(await ButtonRegister);
    const registrer = getByText('Cadastro');
    expect(registrer).toBeInTheDocument();
  });
});