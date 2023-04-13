let myString = "webmaster";

function alphabeticalOrder (word){
  let arr = word.split('');
  let result = arr.sort();
  let reverseWord = result.join('');
  console.log(reverseWord);
}

alphabeticalOrder(myString);