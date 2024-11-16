let balance = 0;

document.getElementById('depositBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        showMessage(`Deposited: $${amount}`);
    } else {
        showMessage('Please enter a valid amount to deposit.');
    }
    clearInput();
});

document.getElementById('withdrawBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        showMessage(`Withdrew: $${amount}`);
    } else if (amount > balance) {
        showMessage('Insufficient balance.');
    } else {
        showMessage('Please enter a valid amount to withdraw.');
    }
    clearInput();
});

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function showMessage(msg) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = msg;
    setTimeout(() => {
        messageDiv.innerText = '';
    }, 3000);
}

function clearInput() {
    document.getElementById('amount').value = '';
}