import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calculator.css'

function Calculator() {
  const [metrics, setMetrics] = useState({
    height: 0,
    weight: 0
  });

  const [imc, setImc] = useState(null);

  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setMetrics((oldMetrics) => ({
      ...oldMetrics,
      [name]: value
    }));
  }

  function calculate() {
    const { height, weight } = metrics;

    const newImc = (weight / (height ** 2)).toFixed(2);

    setImc(newImc);
  }

  return (
    <main id='calculator-page'>
      <h1 id='calculator-title'>Calculadora de IMC</h1>
      <form id='calculator-form'>
        <div id='inputs-container'>
          <label htmlFor='height'>
            Altura: (ex: 1.70)
            <input name='height' id='height' type='number' onKeyUp={handleChange} />
          </label>
          <label htmlFor='weight'>
            Peso: (ex: 69.20)
            <input name='weight' id='weight' type='number' onKeyUp={handleChange} />
          </label>
        </div>
        <button type='button' onClick={calculate}>Calcular</button>
      </form>
      <h3><span>Seu IMC:</span> {imc}</h3>
      <button id='redirect-button' onClick={() => navigate('/saiba-mais')}>Saiba mais</button>
    </main>
  );
}

export default Calculator;
