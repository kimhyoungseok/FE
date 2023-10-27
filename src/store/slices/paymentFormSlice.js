import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  paymentInput: {
    userEmail: '',
    cardNumber: '',
    cardExpirationPeriod: '',
    cardCvc: '',
  },
  alertMessage: {
    userEmail: '',
    cardNumber: '',
    cardExpirationPeriod: '',
    cardCvc: '',
  },
  cardNumberInput: {
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
  },
  fullCardNumber: '',
};

const paymentFormSlice = createSlice({
  name: 'paymentFormData',
  initialState,
  reducers: {
    setPaymentInput: (state, action) => {
      state.paymentInput= { ...state.paymentInput, ...action.payload };
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = { ...state.alertMessage, ...action.payload };
    },
    setCardNumberInput: (state, action) => {
      state.cardNumberInput = { ...state.cardNumberInput, ...action.payload };
    },
    setFullCardNumber: (state, action) => {
      state.fullCardNumber = action.payload;
    },
  },
});

export const {
  setPaymentInput,
  setAlertMessage,
  setCardNumberInput,
  setFullCardNumber,
} = paymentFormSlice.actions;
export default paymentFormSlice.reducer;