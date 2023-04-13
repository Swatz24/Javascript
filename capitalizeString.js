let mySentence = 'the quick brown fox';

function capitalize(str){
  let arr = str.split(" ");
  console.log(arr);

  for (let i=0; i< arr.length; i++){
    arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(arr);
  let result = arr.join(" ");
  return result;
}

console.log(capitalize(mySentence));