
let originalBill;
originalBill = 27.23;

// create variable to store the total bill
let totalBill;

// Display the original Bill
console.log("Original Bill:", "$", originalBill);

// Call function to calculate the total bill and storing the returned value to a variable totalBill
totalBill=getBillTotal(originalBill);

// Function to calculate the total bill including the tip.
function getBillTotal(bill){
  let calTip;


  // Calling function calculatetip and storing the returned value to a variable calTip
    // converting $ value to cents, before calculating tip to avoid rounding errors.
  calTip = calculateTip(bill*100);

  console.log("Tip returned from the calculateTip(): " + "$",calTip);

  // Declaring the billTotal variable and storing the added output (Bill + Tip)
  let billTotal ;
    // converting $ to cents
  bill= bill*100;
  calTip=calTip*100;
    // Rounding and converting cents to dollar
  billTotal = Math.round(bill + calTip)/100;

  // return the result 
  return billTotal;

}

// Function to calculate tip
function calculateTip(bill){

  newBill = 0.2 * bill;
    // rounding and converting cents to dollar
  return  (Math.round(newBill))/100;
   

}


console.log("Updated Bill returned from the getBillTotal(): $", totalBill);

