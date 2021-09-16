import React from 'react';
import {  fireEvent } from '@testing-library/react';
import renderWithRouter from './../helpers/renderWithRouter';
import renderWithContext from '../helpers/renderWithContext';
import App from './../../App';
import dataTestIds from '../../utils/dataTestIds';

describe('Tela 404', () => {

  test('Verifica componentes tela 404', async () => {
    const { getByTestId  } = renderWithContext(renderWithRouter(<App />,['/Nada']));

    const notFound = getByTestId("image-not-found");
    expect(notFound).toBeInTheDocument();

  });
});