import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

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

  test('Verifica se há o botão "Sair" na tela Admin', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const linkProductsTestId = getByTestId(/customer_products__element-navbar-link-logout/);
    expect(linkProductsTestId).toBeInTheDocument();
  });
});
