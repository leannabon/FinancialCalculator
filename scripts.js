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
function init() {
  const calculateBtn = document.getElementById("btnCalculate");
  calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked() {
  let principalAmount = Number(document.getElementById("principalAmount").value);
  let percentAmount = Number(document.getElementById("percentAmount").value);
  let yearsAmount = Number(document.getElementById("yearsAmount").value);

  let result = number1 + number2;
  document.getElementById("answerField").value = result;

}