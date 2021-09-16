import React from 'react';
import { render } from '@testing-library/react';
import Provider from '../../context/Provider';

const renderWithContext = (
  component,
) => ({
  ...render(<Provider>{component}</Provider>),
});

export default renderWithContext;
