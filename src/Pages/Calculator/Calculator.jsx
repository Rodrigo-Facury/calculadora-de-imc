import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Components/Input';
import imcStatus from '../../utils/imcStatus';
import './Calculator.css'

function Calculator() {
  const [metrics, setMetrics] = useState({
    height: 0,
    weight: 0
  });

  const [imc, setImc] = useState(null);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  function calculate() {
    const { height, weight } = metrics;

    const newImc = Number((weight / (height ** 2)).toFixed(2));
    const newStatus = imcStatus(newImc);

    if (newImc < 250 && newImc > 0) {
      setImc(newImc);
      setStatus(newStatus);

    } else {
      setImc(null);
      setStatus(null);
    }
  }

  function handleChange({ key, target: { name, value } }) {
    if (key === 'Enter') {
      calculate();
    }

    setMetrics((oldMetrics) => ({
      ...oldMetrics,
      [name]: value
    }));
  }

  function clear() {
    const inputHeight = document.getElementsByClassName('form-input')[0];
    const inputWeight = document.getElementsByClassName('form-input')[1];

    inputHeight.value = '';
    inputWeight.value = '';

    setImc(null);
    setStatus(null);
  }

  return (
    <main id='calculator-page'>
      <h1 id='calculator-title'>Calculadora de IMC</h1>
      <form id='calculator-form'>
        <div id='inputs-container'>
          <Input id='height' name='height' handleChange={handleChange} >
            Altura: (ex: 1.70)
          </Input>
          <Input id='weight' name='weight' handleChange={handleChange} >
            Peso: (ex: 69.20)
          </Input>
        </div>
        <div id='form-buttons-container'>
          <button id='clear-button' className='form-button' type='button' onClick={clear}>Limpar</button>
          <button className='form-button' type='button' onClick={calculate}>Calcular</button>
        </div>
      </form>
      <div id='answer-container'>
        <h3 className='answer'><span>Seu IMC:</span> {imc}</h3>
        <h3 id='status' className='answer'><span id='status-anchor'>Classificação:</span> {status}</h3>
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
