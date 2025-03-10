// Variables to hold the status of additional fees
let transportFeeAdded = false;
let gymFeeAdded = false;

document.getElementById('addTransportFee').addEventListener('click', () => {
    transportFeeAdded = !transportFeeAdded;
    toggleButtonStyle('addTransportFee', transportFeeAdded);
});

document.getElementById('addGymFee').addEventListener('click', () => {
    gymFeeAdded = !gymFeeAdded;
    toggleButtonStyle('addGymFee', gymFeeAdded);
});

function toggleButtonStyle(buttonId, isActive) {
    const button = document.getElementById(buttonId);
    if (isActive) {
        button.style.backgroundColor = '#6a11cb';
    } else {
        button.style.backgroundColor = '#2575fc';
    }
}

function calculateFees() {
    // Get the input values
    const amount = parseFloat(document.getElementById("amount").value);
    const transportFee = transportFeeAdded ? 4000 : 0;
    const gymFee = gymFeeAdded ? 1500 : 0;
    const waiverPercentage = parseFloat(document.getElementById("waiver").value);

    // Ensure the base amount is valid
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid fee amount.");
        return;
    }

    // Calculate the total amount including additional fees (Transport + Gym)
    const totalAmount = amount + transportFee + gymFee;
    

    // Apply the waiver to the original amount (without additional fees)
    const amountAfterWaiver = amount * (1 - waiverPercentage / 100);

    // Calculate the first installment (includes transport and gym fees)
    const installment40 = ((amount) * 0.40)+ transportFee + gymFee; // First installment includes additional fees

    // Calculate the second and third installments (based on original amount after waiver, excluding additional fees)
    const installment30 = amountAfterWaiver * 0.30; // Second installment based on amount after waiver
    const installment30Remaining = amountAfterWaiver * 0.30; // Third installment based on amount after waiver

    // Display the total amount, first installment, and second and third installments
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    document.getElementById("installment40").textContent = installment40.toFixed(2);
    document.getElementById("installment30").textContent = installment30.toFixed(2);
    document.getElementById("installment30Remaining").textContent = installment30Remaining.toFixed(2);

    // Show the result section
    document.getElementById("result").style.display = "block";
}
