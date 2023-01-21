import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import bookSlice from './Store/BookSlice';
import { renderWithProviders } from './Common/UnitTestUtils/Provider';


xtest('renders learn react link', () => {
  renderWithProviders(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
