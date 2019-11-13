// listen for submit
document.getElementById("loan-form").addEventListener("submit", calculateResults);

function calculateResults(e) {
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("year");

    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calcInterest = parseFloat(interest.value) /100 / 12;
    const calcPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calcInterest, calcPayments);
    const monthly = (principal * x * calcInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcPayments).toFixed(2);
        totalInterest.value = ((monthly * calcPayments) - principal).toFixed(2);
    }
    else {
        showError("Check Your Numbers...");
    }

    e.preventDefault();
}

function showError(error) {
    const errorDiv = document.createElement("div");

    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    errorDiv.className = "alert alert-danger";

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector(".alert").remove();
}