const handleDecimals = (num) => Math.round(num * 100) / 100

const calcMonthlyPayment = ({apr, loanAmount, term}) => {
  term = parseFloat(term);
  apr = parseFloat(apr);

  //checks for empty string or 0
  if(!term || !loanAmount) return 0;
  // If apr is 0, return loan broken into term in months
  if(!apr) return handleDecimals(loanAmount / 30 / 12);

  let monthlyApr = (apr * 0.01) / 12;
  let termInMonths = term * 12;

  let monthlyPayment = loanAmount * ( monthlyApr * Math.pow( ( 1 + monthlyApr ), termInMonths ) )
                                    / ( Math.pow( (1 + monthlyApr ), termInMonths ) - 1 );

  return handleDecimals(monthlyPayment);
}

export default calcMonthlyPayment;
