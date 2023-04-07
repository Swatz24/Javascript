
// Recursive Function
function calculateExponentRecur(base, expo){

  let result;
 if (expo == 0){
   result = 1;
   return result;
  
 } else{
  
   result = base* calculateExponentRecur(base, expo-1);
   return result;
   
 }

}

// Displaying Values and calling recursive functions

console.log("Exponential with recursion");
console.log(calculateExponentRecur(2,5));
console.log(calculateExponentRecur(7,3));

console.log(calculateExponentRecur(12,2));

console.log(calculateExponentRecur(9,4));

// Non Recursive Functions

function exponent(base, expo){
  if(expo ==0){
    return 1;
  }else{
    let result = 1;
    for (i=1; i<=expo; i++){
      result *= base;
    
    }
    return result;

  }
}
console.log("Exponential without recursion");
console.log(exponent(2,5));
console.log(exponent(7,3));

console.log(exponent(12,2));

console.log(exponent(9,4));