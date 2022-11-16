import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


const initialState = {
  imc: null,
  status: null,
  metrics: {
    height: 0,
    weight: 0
  }
}

function imcReducer(state = initialState, action) {
  switch(action.type) {
    case 'changeMetrics':
      const metrics = action.payload;
      return {
        ...state,
        metrics
      }

    case 'calculate':
      const { imc, status } = action.payload;

      return {
        ...state,
        imc,
        status
      }

    case 'reset':
      return initialState;
    
    default:
      return initialState;
  }
}

export const store = configureStore({
  reducer: {
    imcCalculator: imcReducer
  }
});

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;
