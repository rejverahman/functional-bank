function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const preBalanceAmount = parseFloat(balanceTotalText);
    return preBalanceAmount;
}
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    const prebalanceTotal= getCurrentBalance();
    balanceTotal.innerText = prebalanceTotal + depositAmount;
    if (isAdd == true) {
        balanceTotal.innerText = prebalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = prebalanceTotal - depositAmount;
    }
}
//Deposit Amount JavaScripts
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})
//Withdraw Amount
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance= getCurrentBalance();
    if (inputWithdrawAmount > 0 && inputWithdrawAmount<=currentBalance) {
        updateTotalField('withdraw-total', inputWithdrawAmount);
        updateBalance(inputWithdrawAmount, false);
    }
})