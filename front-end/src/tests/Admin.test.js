import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { fireEvent } from '@testing-library/react';

describe('Tela de Admin', () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.YWRtQGRlbGl2ZXJ5YXBwLmNvbQ.2gYh-bSOjBInsijAAWWNUcJ9K8_869Q93AmgdEn3NY8';

  beforeEach(() => {
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify({
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      role: 'administrator',
      token,
    }));

    const { history } = renderWithRouter(<App />);
    history.push('/admin/manage');
  });

  test('Verifica se renderiza o texto "Delivery App Admin"', () => {
    const { getByText } = renderWithRouter(<App />);
    const text = getByText(/Delivery App Admin/i);

    expect(text).toBeInTheDocument();
  });

  test('Verifica se há o botão "Sair" na tela Admin', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const testId = getByTestId(/customer_products__element-navbar-link-logout/);
    expect(testId).toBeInTheDocument();
  });

  test('Verifica se renderiza o texto "Nome"', () => {
    const { getByText } = renderWithRouter(<App />);
    const text = getByText(/Nome/i);

    expect(text).toBeInTheDocument();
  });

  test('Verifica se há o campo "Nome"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const testId = getByTestId(/admin_manage__input-name/);

    expect(testId).toBeInTheDocument();
  });

  test('Verifica se há o campo "Email"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const testId = getByTestId(/admin_manage__input-email/);

    expect(testId).toBeInTheDocument();
  });

  test('Verifica se há o campo "Senha"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const testId = getByTestId(/admin_manage__input-password/);

    expect(testId).toBeInTheDocument();
  });

  test('Verifica se há o campo "Tipo"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const testId = getByTestId(/admin_manage__select-role/);

    expect(testId).toBeInTheDocument();
  });

  test('Verifica se há o botão "Cadastrar"', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const testId = getByTestId(/admin_manage__button-register/);

    expect(testId).toBeInTheDocument();
  });

  test('Alterando o valor do campo "Nome" e testando o valor guardado', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const input = getByTestId(/admin_manage__input-name/);
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Zezinho do Silva' } });
    expect(input).toHaveValue('Zezinho do Silva');
  });

  test('Alterando o valor do campo "Email" e testando o valor guardado', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const input = getByTestId(/admin_manage__input-email/);
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'zezinho@email.com' } });
    expect(input).toHaveValue('zezinho@email.com');
  });

  test('Alterando o valor do campo "Senha" e testando o valor guardado', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const input = getByTestId(/admin_manage__input-password/);
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'zezinho123' } });
    expect(input).toHaveValue('zezinho123');
  });
});
