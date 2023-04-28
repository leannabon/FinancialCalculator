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
    
    let deposit = Number(document.getElementById("depositAmount").value);
    let percent = Number(document.getElementById("percentAmount").value);
    let years = Number(document.getElementById("yearsAmount").value);

  //Compound interest calculator
    let nomialInterest = percent / 100;
    let result3 = deposit * (Math.pow((1 + nomialInterest / 365),(365 * years)));
    let result2 = result3 - deposit;

  
  //Define formula for interest paid
    document.getElementById("interestPaidField").value = result2.toFixed(2);
  
  //Define formula for displaying total accrued amount
    document.getElementById("accruedAmountField").value = result3.toFixed(2);

}

  

