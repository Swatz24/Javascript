let x = 14;

function primeNumber(num){

  for (let i=2; i <num; i++){

    if ( num % i == 0 ){
      return "is not Prime Number.";
      
  }

  return "is a Prime Number."
}
}

let result = primeNumber(x);
console.log(`${x}  ${result}`);