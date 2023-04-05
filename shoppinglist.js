//Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
let shopItems = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
console.log("Shopping list:" ,shopItems);

//Add 'fruit loops' to the list.
shopItems.push('fruit loops');
console.log("Adding Fruits loops to the list:" ,shopItems);

//Update 'coffee' to 'fair trade coffee'
let coffeeIndex = shopItems.indexOf('coffee');
shopItems[coffeeIndex] = 'fair trade coffee';
console.log("Updating coffee to Fair trade coffee:" ,shopItems);

//Replace 'chips' and 'salsa' with 'rice' and 'beans'
let chipsIndex = shopItems.indexOf('chips');
shopItems[chipsIndex] = 'rice';
let salsaIndex = shopItems.indexOf('salsa');
shopItems[salsaIndex] = 'beans';
console.log("Replacing chips and salsa to rice and beans:" ,shopItems);

//Create an empty array to represent your shopping cart.

let shoppingCart = [];
console.log(typeof(shoppingCart));
console.log(shoppingCart.length);

//Remove the last item from your shopping list and add it to your cart

shoppingCart.unshift(shopItems.pop()); 

console.log("Updated shopping list:" , shopItems);
console.log("Shopping Cart:" , shoppingCart);

//Remove the first item from your shopping list and add it to the cart

shoppingCart.unshift(shopItems.shift()); 
console.log("Updated shopping list:" , shopItems);
console.log("Shopping Cart:" , shoppingCart);

//Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.

let numberItems = shopItems.length;
console.log("Remaining items in shopping list:" , numberItems);

while ( numberItems>0){
  shoppingCart.push(shopItems.shift()); 
  console.log("Updated shopping list:" , shopItems);
  console.log("Shopping Cart:" , shoppingCart);
   numberItems--;
}

//Sort the items in your cart alphabetically... and then backwards

shoppingCart.sort();
console.log("Sorted items in the cart:", shoppingCart);

shoppingCart.reverse();
console.log("Reversed items in the cart:", shoppingCart);

//Print the list of items in your shopping cart to the console as comma separated string.


console.log(shoppingCart.toString());
