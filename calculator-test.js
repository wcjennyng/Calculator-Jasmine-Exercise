
it('should calculate the monthly rate correctly', function () {
  const defaultVal = {
    amount: 10000,
    years: 5,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(defaultVal)).toEqual('186.43')
});


it("should return a result with 2 decimal places", function() {
  const defaultVal = {
    amount: 10000,
    years: 3,
    rate: 2.3
  };
  expect(calculateMonthlyPayment(defaultVal)).toEqual('287.74')
});

it("should return a result with a low interest rate", function() {
  const defaultVal = {
    amount: 10000,
    years: 5,
    rate: 0.1
  };
  expect(calculateMonthlyPayment(defaultVal)).toEqual('167.09')
});