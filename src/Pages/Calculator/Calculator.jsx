import { useNavigate } from 'react-router-dom';
import Input from '../../Components/Input';
import { useAppDispatch, useAppSelector } from '../../store.js';
import imcStatus from '../../utils/imcStatus';
import './Calculator.css';


function Calculator() {
  const state = useAppSelector((state) => state.imcCalculator);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  function clear() {
    const inputHeight = document.getElementsByClassName('form-input')[0];
    const inputWeight = document.getElementsByClassName('form-input')[1];

    inputHeight.value = '';
    inputWeight.value = '';

    dispatch({ type: 'reset' });
  }

  function calculate() {
    const { height, weight } = state.metrics;

    const newImc = Number((weight / (height ** 2)).toFixed(2));
    const newStatus = imcStatus(newImc);

    if (newImc < 250 && newImc > 0) {
      dispatch({
        type: 'calculate',
        payload: {
          imc: newImc,
          status: newStatus
        }
      });

    } else {
      clear();
    }
  }

  function handleChange({ key, target: { name, value } }) {
    if (key === 'Enter') {
      calculate();
    }

    dispatch({ type: 'changeMetrics', payload: {
      ...state.metrics,
      [name]: value
    } });
  }

  return (
    <main id='calculator-page'>
      <h1 id='calculator-title'>Calculadora de IMC</h1>
      <form id='calculator-form'>
        <div id='inputs-container'>
          <Input id='height' name='height' handleChange={handleChange} defaultValue={ state.metrics.height } >
            Altura: (ex: 1.70)
          </Input>
          <Input id='weight' name='weight' handleChange={handleChange} defaultValue={ state.metrics.weight } >
            Peso: (ex: 69.20)
          </Input>
        </div>
        <div id='form-buttons-container'>
          <button id='clear-button' className='form-button' type='button' onClick={clear}>Limpar</button>
          <button className='form-button' type='button' onClick={calculate}>Calcular</button>
        </div>
      </form>
      <div id='answer-container'>
        <h3 className='answer'><span>IMC:</span> {state.imc}</h3>
        <h3 id='status' className='answer'><span id='status-anchor'>Classificação:</span> {state.status}</h3>
      </div>
      <button
        className='form-button'
        type='button'
        id='redirect-button'
        onClick={() => navigate('/saiba-mais')}
      >
        Saiba mais
      </button>
    </main>
  );
}

export default Calculator;
