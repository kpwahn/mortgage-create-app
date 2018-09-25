import {handleActions} from 'redux-actions';
import _ from 'lodash';
import calculatePayment from './calculatePayment';
import {amortify, amortifyWithExtra} from './amortify';

let INITIAL_STATE = {
  amortization: [],
  apr: 5,
  loanAmount: 300000,
  monthlyPayment: 0,
  term: 30,
  totalInterestPaid: 0
}

let monthlyPayment = calculatePayment(INITIAL_STATE);
let amortization = amortify({...INITIAL_STATE, monthlyPayment});
let amortizationExtra = amortifyWithExtra({...INITIAL_STATE, monthlyPayment});

INITIAL_STATE = {
  ...INITIAL_STATE,
  monthlyPayment,
  amortization,
  amortizationExtra,
  totalInterestPaid: amortization[amortization.length - 1].totalInterestPaid
}

const setLoanAmount = (state, {payload}) => {
  let loanAmount = payload.value;
  let monthlyPayment = calculatePayment({...state, loanAmount});
  let amortization = amortify({...state, loanAmount, monthlyPayment});
  let amortizationExtra = amortifyWithExtra({...state, loanAmount, monthlyPayment});

  return {
    ...state,
    amortization,
    amortizationExtra,
    loanAmount: payload.value,
    monthlyPayment,
    totalInterestPaid: amortization[amortization.length - 1].totalInterestPaid
  }
};

const setAPR = (state, {payload}) => {
  let apr = payload.value;
  let monthlyPayment = calculatePayment({...state, apr});
  let amortization = amortify({...state, apr, monthlyPayment});
  let amortizationExtra = amortifyWithExtra({...state, apr, monthlyPayment});

  return {
    ...state,
    amortization,
    amortizationExtra,
    apr: payload.value,
    monthlyPayment,
    totalInterestPaid: amortization[amortization.length - 1].totalInterestPaid
  }
};

const setTerm = (state, {payload}) => {
  let term = payload.value;
  let monthlyPayment = calculatePayment({...state, term});
  let amortization = amortify({...state, monthlyPayment, term});
  let amortizationExtra = amortifyWithExtra({...state, monthlyPayment, term});

  return {
    ...state,
    amortization,
    amortizationExtra,
    monthlyPayment,
    term: payload.value,
    totalInterestPaid: amortization[amortization.length - 1].totalInterestPaid
  }
}

const setExtra = (state, {payload}) => {
  let {index, value} = payload;

  let obj = {...state.amortizationExtra[index - 1], extra: value};

  let first = _.take(state.amortizationExtra, index - 1);
  let last = _.takeRight(state.amortizationExtra, state.amortization.length - payload.index)

  let amortizationExtra = amortifyWithExtra({...state, amortizationWithExtra: [...first, obj, ...last]});

  return {
    ...state,
    amortizationExtra
  }
}

export default handleActions({
  SET_APR: (state, action) => setAPR(state, action),
  SET_EXTRA: (state, action) => setExtra(state, action),
  SET_LOAN_AMOUNT: (state, action) => setLoanAmount(state, action),
  SET_TERM: (state, action) => setTerm(state, action)
}, INITIAL_STATE);
