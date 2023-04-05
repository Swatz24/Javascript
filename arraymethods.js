
//getFirstValue of an array

let example1 = [5,10,15,20,25];
let myArray = [7,14,21,28,35];
let myArray2 = [10,20,'a',30,40];

console.log("First Array:" ,example1);
firstElement(example1);
console.log("Second Array:" , myArray);
firstElement(myArray);
console.log("Third Array:" , myArray2);
firstElement(myArray2);

let arr;
function firstElement(arr)
{
  let arrayType;
  for ( let i=0; i < arr.length; i++){
    if ( typeof(arr[i]) === 'number'){
      console.log("Element", i,  "is a number");
      arrayType = true;
    }
    else{
      arrayType = false;
      console.log("Element" , i , "is not a number");
      break;

    }
  }


  if ( (arr.length > 1) && (arrayType)){
   console.log( "First array element:", arr[0]) ;
  }
  else{
    console.log("Array contains other datatypes than numbers");
  }

}


// Increment each array element by 1.
let example2=[1,2,3,4,5];
console.log("Actual array:" , example2);
let x= example2.length;
incrementItems(x);
let y;
function incrementItems(y)
{
  for(let i=0; i < y; i++){
    
  example2[i] ++; 
  }

}
console.log("Array after Increment", example2);

//Rotate an array.

let example3 = ['a', 'b' , 'c' ,'d'];
let length = example3.length;

console.log("Array before rotation:", example3);
rotate(length);

let z;
function rotate(z){
  let temp = example3[0];
  for(let i=0;i<z; i++)

  {
    
    example3[i] = example3 [i+1];
  }
  example3[z-1]= temp;

}
console.log("Array after the elements are rotated:" , example3);