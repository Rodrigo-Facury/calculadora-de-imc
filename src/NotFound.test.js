import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './Pages/NotFound';

describe('Test information of NotFoundPage', () => {
  it('Should show code 404 when the page is not found', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
  
    const notFoundCode = screen.getByText('404');
  
    expect(notFoundCode).toBeInTheDocument();
  });

  it('Should show error text when the page is not found', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
  
    const notFoundText = screen.getByText(/página não encontrada/i);
  
    expect(notFoundText).toBeInTheDocument();
  });

  it('Should show go back button when the page is not found', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
  
    const goBackButton = screen.getByText(/voltar/i);
  
    expect(goBackButton).toBeInTheDocument();
  });
});
