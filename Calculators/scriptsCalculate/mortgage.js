//MORTGAGE CALCULATOR

"use strict";

window.onload = init();


//Define event for button action
function init() {
    const calculateBtn = document.getElementById("btnCalculate");
    calculateBtn.onclick = onCalculateBtnClicked;
  }
  
  //Inputs define
  function onCalculateBtnClicked() {
    
    let principal = Number(document.getElementById("principalAmount").value);
    let percent = Number(document.getElementById("percentAmount").value);
    let years = Number(document.getElementById("yearsAmount").value);

  //Compound interest calculator
    let nomialInterest = percent / 100;
    let result3 = principal * (Math.pow((1 + nomialInterest / 12),(12 * years)));
    let result1 = result3 / years;
    let result2 = result3 - principal;

  //Define formula for displaying monthly Payment
    document.getElementById("monthlyPayField").value = result1.toFixed(2);
  
  //Define formula for interest paid
    document.getElementById("interestPaidField").value = result2.toFixed(2);
  
  //Define formula for displaying total accrued amount
    document.getElementById("accruedAmountField").value = result3.toFixed(2);

}

  

