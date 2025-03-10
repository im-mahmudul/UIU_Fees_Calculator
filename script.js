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
    
    const amount = parseFloat(document.getElementById("amount").value);
    const transportFee = transportFeeAdded ? 4000 : 0;
    const gymFee = gymFeeAdded ? 1500 : 0;
    const waiverPercentage = parseFloat(document.getElementById("waiver").value);

    
    const totalAmount = amount + transportFee + gymFee;

    
    const amountAfterWaiver = totalAmount * (1 - waiverPercentage / 100);

    
    const installment40 = amountAfterWaiver * 0.40;
    const installment30 = amountAfterWaiver * 0.30;
    const installment30Remaining = amountAfterWaiver * 0.30;


    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    document.getElementById("installment40").textContent = installment40.toFixed(2);
    document.getElementById("installment30").textContent = installment30.toFixed(2);
    document.getElementById("installment30Remaining").textContent = installment30Remaining.toFixed(2);

    
    document.getElementById("result").style.display = "block";
}
