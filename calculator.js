window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

 

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultVal = {
    amount: 10000,
    years: 5,
    rate: 0.1
  }
  const loanAmt = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");
  loanAmt.value = defaultVal.amount; // sets value amt input = 10000
  loanYears.value = defaultVal.years;
  loanRate.value = defaultVal.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(defaultVal) {
  const monthlyRate = (defaultVal.rate/100)/12 ;
  const n = defaultVal.years * 12;
  const formula = ((defaultVal.amount*monthlyRate) /
                      (1-((1+monthlyRate)**(-n)))
                  ).toFixed(2);
  return formula;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyID = document.getElementById('monthly-payment');
  monthlyID.innerText = monthly + ' dollars';
}
