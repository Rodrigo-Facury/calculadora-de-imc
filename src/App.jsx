import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Pages/Calculator/Calculator';
import Information from './Pages/Information/Information';
import './App.css';
import RandomPage from './Pages/RandomPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='/saiba-mais' element={<Information />} />
        <Route path='/button' element={<RandomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
