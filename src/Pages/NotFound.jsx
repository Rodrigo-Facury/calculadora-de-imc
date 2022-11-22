import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main data-testid='not-found-page' >
      <h1>404</h1>
      <p>Página não encontrada</p>
      <button onClick={() => {
        navigate('/');
      }}>Voltar</button>
    </main>
  );
}

export default NotFound;
