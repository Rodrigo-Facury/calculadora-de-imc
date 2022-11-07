import { useNavigate } from "react-router-dom";


function Calculator() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Calculadora</h1>
      <button onClick={() => navigate('/saiba-mais')}>Saiba mais</button>
    </main>
  );
}

export default Calculator;
