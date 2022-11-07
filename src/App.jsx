import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Pages/Calculator/Calculator';
import Information from './Pages/Information/Information';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='/saiba-mais' element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
