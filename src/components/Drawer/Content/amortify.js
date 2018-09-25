const handleDecimals = (num) => Math.round(num * 100) / 100

const amortify = ({apr, extra, loanAmount, monthlyPayment, term}) => {
  let rows = [];

  let totalInterestPaid = 0;
  let totalPrincipalPaid = 0;

  let termInMonths = term * 12;
  let monthlyApr = (apr * 0.01) / 12;

  let remainingPrincipal = loanAmount;

  for(let i = 1; i <= termInMonths; i++) {
    let interest = handleDecimals(remainingPrincipal * monthlyApr);
    let principal = handleDecimals(monthlyPayment - interest);

    remainingPrincipal = handleDecimals(remainingPrincipal - principal);
    totalInterestPaid = handleDecimals(totalInterestPaid + interest);
    totalPrincipalPaid = handleDecimals(totalInterestPaid + principal);

    rows.push({
        extra: 0,
        index: i,
        interest,
        principal,
        remainingPrincipal,
        totalInterestPaid,
        totalPrincipalPaid
      });
  }

  return rows;
};

const amortifyWithExtra = ({amortizationWithExtra = [], apr, loanAmount, monthlyPayment, term}) => {
  let rows = [];

  let totalInterestPaid = 0;
  let totalPrincipalPaid = 0;

  let termInMonths = term * 12;
  let monthlyApr = (apr * 0.01) / 12;

  let remainingPrincipal = loanAmount;

  for(let i = 1; i <= termInMonths; i++) {
    let extra = (amortizationWithExtra[i - 1]) ? amortizationWithExtra[i - 1].extra : 0;
    // If it's empty string set it to 0
    extra = extra || 0;

    let interest = handleDecimals(remainingPrincipal * monthlyApr);
    let principal = handleDecimals( (monthlyPayment - interest) + parseFloat(extra));

    remainingPrincipal = handleDecimals(remainingPrincipal - principal);
    totalInterestPaid = handleDecimals(totalInterestPaid + interest);
    totalPrincipalPaid = handleDecimals(totalInterestPaid + principal);

    rows.push({
        extra,
        index: i,
        interest,
        principal: principal - parseFloat(extra),
        remainingPrincipal,
        totalInterestPaid,
        totalPrincipalPaid
      });
  }

  return rows;
};

export {
  amortify,
  amortifyWithExtra
};
