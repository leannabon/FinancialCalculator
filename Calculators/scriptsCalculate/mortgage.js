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
  
  console.log (accruedAmountField);
  