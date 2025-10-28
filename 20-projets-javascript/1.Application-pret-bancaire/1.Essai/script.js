const loanData = {
    amout: 10000,
    repayment: 42,
    rate: 7,
};

const rangeInputs = document.querySelectorAll('.loan-app__range-input');
rangeInputs.forEach((rangeInput) => {
    rangeInput.addEventListener('input', handleRangeChange);
});

const loanAmountLabel = document.querySelector('.js-loan-amount');
const repaymentDuration = document.querySelector('.js-repayment-duration');

function handleRangeChange(e) {
    const inputValue = Number(e.target.value);

    if (e.target.id === 'loan-amount') {
        loanAmountLabel.textContent = `${inputValue.toLocaleString()} €`;
        loanData.amout = inputValue;
    } else {
        repaymentDuration.textContent = `${inputValue} `;
        loanData.repayment = inputValue;
    }

    displayLoanInformation();
}

const totalPaymentTxt = document.querySelector('.js-total-value');
const perMonthPaymentTxt = document.querySelector('.js-monthly-payment');
const totalInterestTxt = document.querySelector('.js-total-interest');

function displayLoanInformation() {
    const totalPayment =
        loanData.amout + loanData.amout * (loanData.rate / 100);
    const monthlyPayment = (totalPayment / loanData.repayment).toFixed(2);
    const totalInterest = totalPayment - loanData.amout;

    totalPaymentTxt.textContent = `${Math.trunc(
        totalPayment
    ).toLocaleString()} €`;

    perMonthPaymentTxt.textContent = `${Math.trunc(
        monthlyPayment
    ).toLocaleString()} €`;

    totalInterestTxt.textContent = `${Math.trunc(
        totalInterest
    ).toLocaleString()} €`;
}
