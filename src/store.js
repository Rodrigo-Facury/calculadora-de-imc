import { useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
  imc: null,
  status: null,
  metrics: {
    height: 0,
    weight: 0
  }
}

export const slice = createSlice({
  name: 'imcReducer',
  initialState,
  reducers: {
    changeMetrics: (state, action) => {
      state.metrics = action.payload;
    },
    calculateImc: (state, action) => {
      const { imc, status } = action.payload

      state.imc = imc;
      state.status = status;
    },
    reset: (state) => {
      return initialState; 
    }
  }
});

export const store = configureStore({
  reducer: {
    imcCalculator: slice.reducer
  }
});

export const { changeMetrics, calculateImc, reset } = slice.actions;

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;
