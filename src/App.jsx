import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Pages/Calculator/Calculator';
import Information from './Pages/Information/Information';
import NotFound from './Pages/NotFound';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calculator />} />
          <Route path='/saiba-mais' element={<Information />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
