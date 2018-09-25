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

const setRemainingPrinciple = createAction(
  'SET_REMAINING_PRINCIPLE',
  ({index, value}) => ({index, value})
);

const setRemainingTerm = createAction(
  'SET_REMAINING_TERM',
  ({index, value}) => ({index, value})
);

export {
  setAPR,
  setExtra,
  setLoanAmount,
  setRemainingPrinciple,
  setRemainingTerm,
  setTerm
};
