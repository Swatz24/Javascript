//Create two arrays of numbers called numbers1 and numbers

let numbers1 = [1,2,3,4,5];
let numbers2 =[6,7,8,9,10];

//Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.

let numbers = [...numbers1, ...numbers2];
console.log("New Array", numbers);

//Define an arrow function called square that accepts a number as an argument and returns the square of the number.

let square = (num) => num*num;
let num =5;
console.log(`Square of ${num} is ${square(num)}`);

//Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.

const squares = numbers.map(number => number*number );
console.log("Square of the array", numbers , "is",  squares);

//Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.

let isEven = (num) => {
  if (num%2===0){
    return 'true';
  }else{
    return 'false';
  }
}
console.log(`is 4 an even number: ${isEven(4)}`);
console.log(`is 13 an even number: ${isEven(13)}`);

//Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.

let evenSquares = squares.filter(function(num){
  return num % 2 == 0;
})

console.log(`New EvenSquares array is ${evenSquares}`);

//Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.

const [firstEvenSquare, secondEvenSquare, x, y, z] = evenSquares;
console.log(`First Even square number from the ${evenSquares} is ${firstEvenSquare}`);
console.log(`Second Even square number from the ${evenSquares} is ${secondEvenSquare}`);

//Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.

console.log(`Original numbers array: ${numbers},
the squares array: ${squares},
the even squares array ${evenSquares},
First even square number , ${firstEvenSquare},
Second even square, ${secondEvenSquare}`);