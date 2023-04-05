let fruitInventory = new Map();
fruitInventory.set('apple', 10);
fruitInventory.set('banana',20);
fruitInventory.set('orange',30);
// console.log(fruitInventory);
fruitInventory.set('apple', 15);
// console.log(fruitInventory);
let bananaInventory = fruitInventory.get('banana');
//console.log(bananaInventory);

let uniqueColors = new Set();
uniqueColors.add('red');
uniqueColors.add('blue');
uniqueColors.add('green');
uniqueColors.add('yellow');
//console.log(uniqueColors);
let hasBlue;
hasBlue = uniqueColors.has('blue');
//console.log(hasBlue);