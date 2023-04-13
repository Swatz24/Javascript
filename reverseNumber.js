let x = 12300980;

function reverseNumber (num){
  let numStr = String(num);
  let arr = numStr.split('');

  let arrReverse = arr.reverse();

  let result =parseFloat(arrReverse.join(''));
  console.log(result);
  // To keep the original sign of the number
  let final = result * Math.sign(num);

  console.log(final, typeof(final));
  return final;
}

reverseNumber(x);