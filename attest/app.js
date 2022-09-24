document.getElementById("btn").addEventListener("click",computeResults)

function computeResults(e) {

const UIamount = document.getElementById("loan").value;
const UIinterest = document.getElementById("rate").value;
const UIyears = document.getElementById("years").value;

const principal = parseFloat(UIamount);
const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
const calculatedPayments = parseFloat(UIyears) * 12;
const x = Math.pow(1 + CalculateInterest, calculatedPayments);
const monthly = (principal * x * CalculateInterest) / (x - 1);
const monthlyPayment = monthly.toFixed(2);
const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

const totalPayment = (monthly * calculatedPayments).toFixed(2);

document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

document.getElementById("totalInterest").innerHTML = "%" + totalInterest;

document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

    e.preventDefault()
}


