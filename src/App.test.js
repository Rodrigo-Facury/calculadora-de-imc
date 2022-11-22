import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test sanity of routes', () => {
  beforeEach(() => {
    const currentState = window.history.state;

    window.history.replaceState(currentState, '', '/');
  });

  it('Should render information page when the path is /saiba-mais', () => {
    window.history.pushState({}, 'Information page', '/saiba-mais');
  
    render(<App />);
  
    const informationPage = screen.getByTestId('information-page');
  
    expect(informationPage).toBeInTheDocument();
  });

  it('Should render calculator page when the path is /', () => {
    render(<App />);
  
    const calculatorPage = screen.getByTestId('calculator-page');
  
    expect(calculatorPage).toBeInTheDocument();
  });

  it('Should render 404 page when the path is invalid', () => {
    window.history.pushState({}, 'Information page', '/an-invalid-path');

    render(<App />);
  
    const notFoundPage = screen.getByTestId('not-found-page');
  
    expect(notFoundPage).toBeInTheDocument();
  });
});
