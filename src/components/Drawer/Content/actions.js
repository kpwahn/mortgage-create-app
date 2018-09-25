import {createAction} from 'redux-actions';

const setAPR = createAction(
  'SET_APR',
  ({value}) => ({value})
);

const setLoanAmount = createAction(
  'SET_LOAN_AMOUNT',
  ({value}) => ({value})
);

const setTerm = createAction(
  'SET_TERM',
  ({value}) => ({value})
);

const setExtra = createAction(
  'SET_EXTRA',
  ({index, value}) => ({index, value})
);

export {
  setAPR,
  setExtra,
  setLoanAmount,
  setTerm
};
