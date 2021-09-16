import React from 'react';
import {  fireEvent } from '@testing-library/react';
import renderWithRouter from './../helpers/renderWithRouter';
import App from './../../App';
import dataTestIds from '../../utils/dataTestIds';

describe('Tela Register', () => {

  test('Verifica componentes tela de Registro', async () => {
    const { getByText, getByTestId  } = renderWithRouter(<App />, { route: '/register' });
    const ButtonRegister = getByTestId(dataTestIds[4]);
    expect(ButtonRegister).toBeInTheDocument();

    fireEvent.click(await ButtonRegister);

    const register = getByText('Cadastro');
    expect(register).toBeInTheDocument();

    const inputNome = getByTestId(dataTestIds[6]);
    expect(inputNome).toBeInTheDocument();

    fireEvent.change(inputNome, { target: { value: 'Nome Completo' } });
    expect(inputNome.value).toEqual('Nome Completo');

    const inputEmail = getByTestId(dataTestIds[7]);
    expect(inputEmail).toBeInTheDocument();

    fireEvent.change(inputEmail, { target: { value: 'ana@gmail.com' } });
    expect(inputEmail.value).toEqual('ana@gmail.com');

    const inputSenha = getByTestId(dataTestIds[7]);
    expect(inputSenha).toBeInTheDocument();

    fireEvent.change(inputSenha, { target: { value: 'senha123456' } });
    expect(inputSenha.value).toEqual('senha123456');

    const ButtonCadastrar = getByTestId(dataTestIds[9]);
    expect(ButtonCadastrar).toBeInTheDocument();
  });

});