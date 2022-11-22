import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Calculator from './Pages/Calculator/Calculator';
import { store } from './store';

function renderWithProvider(element) {
  render(
    <Provider store={store}>
      <BrowserRouter>
        { element }
      </BrowserRouter>
    </Provider>
  );
}

describe('Test usage of Calculator page', () => { 
  it('Should clear imc information when clear button is clicked', async () => {
    renderWithProvider(<Calculator />);
    
    const clearButton = screen.getByText(/limpar/i);

    expect(clearButton).toBeInTheDocument();

    
    const height = screen.getByTestId('height');
    
    expect(height).toBeInTheDocument();

    fireEvent.change(height, { target: {
      value: 25
    }});

    expect(height).toHaveValue(25)

    fireEvent.click(clearButton);

    expect(height).toHaveValue(null);
  });
});
