// Listen for form submissions
document.getElementById('loan-form').addEventListener('submit', calculateResults)

function calculateResults (e) {
  const form = document.getElementById('loan-form')
  // Get the value of the inputted values
  const loanAmount = document.getElementById('amount').value
  const loanInterest = document.getElementById('interest').value
  const loanLength = document.getElementById('years').value

  const amountEntered = parseFloat(loanAmount)
  const calculateInterest = parseFloat(loanInterest) / 100 / 12
  const calculatePayments = parseFloat(loanLength) * 12

  // Calculates the monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments)
  const monthly = (amountEntered * x * calculateInterest) / (x - 1)
  const monthlyPayments = monthly.toFixed(2)

  // Calculates the interest
  const totalInterest = (monthly * calculatePayments - amountEntered).toFixed(2)

  // Calculates the total payment
  const totalPayment = (monthly * calculatePayments).toFixed(2)

  document.getElementById('monthlyPayment').innerHTML = '£' + monthlyPayments
  document.getElementById('totalInterest').innerHTML = '£' + totalInterest
  document.getElementById('totalPayment').innerHTML = '£' + totalPayment

  form.reset()
  e.preventDefault()
}
