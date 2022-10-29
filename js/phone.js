function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString =phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;

    if(isIncrease == true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function newPhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}
function getTextElementById(ElementId){
    const phoneTotalElement = document.getElementById(ElementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementById(ElementId, value){
    const subTotalElement = document.getElementById(ElementId);
    subTotalElement.innerText = value;

}
function calculateSubTotal(){
    // calculate subtotal
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementById('sub-total', currentSubTotal);
    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount);

    // calculate final total
    const FinalTotal = taxAmount + currentSubTotal;
    setTextElementById('final-total', FinalTotal);

}
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    newPhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
    
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    newPhoneTotalPrice(newPhoneNumber);
    
    calculateSubTotal();
    
})