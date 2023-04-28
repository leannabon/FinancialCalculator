//MORTGAGE CALCULATOR

"use strict";
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
 
    let
    let accruedAmountField = principalAmount (1 + (percentAmount / 100) / 12) ^ 12 * yearsAmount;

  
  //Define formula for displaying monthly Payment
    document.getElementById("monthlyPayField").value = result1;
  
  //Define formula for interest paid
    document.getElementById("interestPaidField").value = result2;
  
  //Define formula for displaying total accrued amount
    document.getElementById("accruedAmountField").value = result3;

  
  }
  
  console.log (accruedAmountField);
  