import { useNavigate } from 'react-router-dom';
import Input from '../../Components/Input';
import { calculateImc, changeMetrics, reset, useAppDispatch, useAppSelector } from '../../store.js';
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

    dispatch(reset());
  }

  async function calculate() {
    const { height, weight } = state.metrics;

    const apiAnswer = await fetch('http://localhost:3001/calculate?' + new URLSearchParams({
      height,
      weight,
    }));

    const parsedAnswer = await apiAnswer.json();

    const { imc: newImc, imcStatus: newStatus }  = parsedAnswer;

    if (newImc < 250 && newImc > 0) {
      dispatch(calculateImc({
        imc: newImc,
        status: newStatus
      }));

    } else {
      clear();
    }
  }

  function handleChange({ key, target: { name, value } }) {
    if (key === 'Enter') {
      calculate();
    }

    dispatch(changeMetrics({
      ...state.metrics,
      [name]: value
    }));
  }

  return (
    <main id='calculator-page' data-testid='calculator-page'>
      <h1 id='calculator-title'>Calculadora de IMC</h1>
      <form id='calculator-form'>
        <div id='inputs-container'>
          <Input dataTestid='height' id='height' name='height' handleChange={handleChange} defaultValue={ state.metrics.height } >
            Altura: (ex: 1.70)
          </Input>
          <Input dataTestid='weight' id='weight' name='weight' handleChange={handleChange} defaultValue={ state.metrics.weight } >
            Peso: (ex: 69.20)
          </Input>
        </div>
        <div id='form-buttons-container'>
          <button id='clear-button' className='form-button' type='button' onClick={clear}>Limpar</button>
          <button className='form-button' type='button' onClick={calculate}>Calcular</button>
        </div>
      </form>
      <div id='answer-container'>
        <h3 className='complete-answer'>
          <span className='answer-anchor'>
            IMC:
          </span> {state.imc && <span data-testid='answer-imc'>
            {state.imc}
          </span>}
        </h3>
        <h3
          id='status'
          className='complete-answer'
        >
          <span className='answer-anchor' id='status-anchor'>
            Classificação:
          </span> {state.status && <span data-testid='answer-status'>
            {state.status}
          </span>}
        </h3>
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
