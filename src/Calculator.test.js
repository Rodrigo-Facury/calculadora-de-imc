import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Calculator from './Pages/Calculator/Calculator';
import { store } from './store';

const expectedImc = 26.79;

const expectedImcStatus = 'Sobrepeso';

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

  // Primeira forma

  // beforeEach(() => {
  //   global.fetch = jest.fn(() => Promise.resolve({
  //     json: () => Promise.resolve({ imc: expectedImc, imcStatus: expectedImcStatus })
  //   }));
  // });

  // Segunda forma

  // beforeEach(() => {
  //   jest.spyOn(global, 'fetch');

  //   global.fetch.mockResolvedValue({
  //     json: jest.fn().mockResolvedValue({ imc: expectedImc, imcStatus: expectedImcStatus }),
  //   });
  // });

  // Terceira forma

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      json: async () => ({ imc: expectedImc, imcStatus: expectedImcStatus })
    }));
  });

  it('Should clear inputs when clear button is clicked', async () => {
    renderWithProvider(<Calculator />);
    
    const clearButton = screen.getByText(/limpar/i);

    expect(clearButton).toBeInTheDocument();
    
    const height = screen.getByTestId('height');
    
    expect(height).toBeInTheDocument();

    fireEvent.change(height, { target: {
      value: 1.76
    }});

    expect(height).toHaveValue(1.76);

    const weight = screen.getByTestId('weight');
    
    expect(weight).toBeInTheDocument();

    fireEvent.change(weight, { target: {
      value: 83
    }});

    expect(weight).toHaveValue(83);

    fireEvent.click(clearButton);

    expect(height).toHaveValue(null);

    expect(weight).toHaveValue(null);
  });

  it('Should appear imc information when calculate button is clicked', async () => {
    renderWithProvider(<Calculator />);
    
    const calulateButton = screen.getByText(/calcular/i);

    expect(calulateButton).toBeInTheDocument();

    fireEvent.click(calulateButton);

    const answerImc = await screen.findByTestId('answer-imc');

    const answerImcStatus = await screen.findByTestId('answer-status');

    expect(answerImc).toHaveTextContent(expectedImc);

    expect(answerImcStatus).toHaveTextContent(expectedImcStatus);
  });

  it('Should clear imc information when clear button is clicked', async () => {
    renderWithProvider(<Calculator />);

    const answerImc = await screen.findByTestId('answer-imc');

    const answerImcStatus = await screen.findByTestId('answer-status');

    expect(answerImc).toHaveTextContent(expectedImc);

    expect(answerImcStatus).toHaveTextContent(expectedImcStatus);

    const clearButton = screen.getByText(/limpar/i);

    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(screen.queryByTestId('answer-imc')).toBeNull();

    expect(screen.queryByTestId('answer-status')).toBeNull();
  });
});
