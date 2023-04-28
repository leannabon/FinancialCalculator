"use strict";

window.onload = init();

//Add Button
function init() {
  const addBtn = document.getElementById("btnAdd");
  addBtn.onclick = onAddBtnClicked;
}

function onAddBtnClicked() {
  let number1 = Number(document.getElementById("number1Field").value);
  let number2 = Number(document.getElementById("number2Field").value);

  let result = number1 + number2;
  document.getElementById("answerField").value = result;

}
//Subtract Button
function init() {
    const subtractBtn = document.getElementById("btnSubtract");
    subtractBtn.onclick = onSubtractBtnClicked;
}
  
  function onSubtractBtnClicked() {
    let number1 = Number(document.getElementById("number1Field").value);
    let number2 = Number(document.getElementById("number2Field").value);
    let result = number1 - number2;
    document.getElementById("answerField").value = result;
  
}
  

//Divide Button
function init() {
    const divideBtn = document.getElementById("btnDivide");
    divideBtn.onclick = onDivideBtnClicked;
}
  
  function onDivideBtnClicked() {
    let number1 = Number(document.getElementById("number1Field").value);
    let number2 = Number(document.getElementById("number2Field").value);
    let result = number1 / number2;
    document.getElementById("answerField").value = result;
  
}


//Multiply Button
function init() {
    const multiplyBtn = document.getElementById("btnMultiply");
    multiplyBtn.onclick = onMultiplyBtnClicked;
}
  
  function onMultiplyBtnClicked() {
    let number1 = Number(document.getElementById("number1Field").value);
    let number2 = Number(document.getElementById("number2Field").value);
    let result = number1 * number2;
    document.getElementById("answerField").value = result;
  
}

//MORTGAGE CALCULATOR

//Define event for button action
function init() {
  const calculateBtn = document.getElementById("btnCalculate");
  calculateBtn.onclick = onCalculateBtnClicked;
}

//Inputs define
function onCalculateBtnClicked() {
  let principalAmount = Number(document.getElementById("principalAmount").value);
  let percentAmount = Number(document.getElementById("percentAmount").value);
  let yearsAmount = Number(document.getElementById("yearsAmount").value);

//Compound interest calculator

    let nomialInterest = percentAmount / 100;
    let accruedAmountField = principalAmount (1 + nomialInterest / 12) ^ 12 * yearsAmount;


//Define formula for displaying monthly Payment
    document.getElementById("monthlyPayField").value = monthlyPayField;

//Define formula for interest paid
    document.getElementById("interestPaidField").value = interestPaidField;

//Define formula for displaying total accrued amount
document.getElementById("accruedAmountField").value = accruedAmountField;


}

