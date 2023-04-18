//Create a function called initializeCart that checks if there's a cart in localStorage;
function initializeCart(){
  if (localStorage.getItem('cart') === null) {
      // if not, it initializes an empty cart and stores it in localStorage.
  localStorage.setItem ('cart', JSON.stringify([]));
  }

}
//Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.

function addItem(item){ 
  //retrieves the cart from localStorage,
      const cart = JSON.parse (localStorage.getItem('cart'));
  // adds the item to the cart, 
      cart.push(item);
  //and then stores the updated cart back into localStorage.
      localStorage.setItem('cart', JSON.stringify(cart)); 
   }

//Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.

function removeItem(itemID){
  const cart = JSON.parse(localStorage.getItem("cart"));
  const newCart = cart.filter ( item => item.id != itemID);
  localStorage.setItem("cart", JSON.stringify(newCart));

}
removeItem(1681834480328); // Removes item with ItemId = '1681834480328'


//Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
const displayCartButton = document.getElementById('displayCartButton');
displayCartButton.addEventListener('click', displayCart);
function displayCart(){
  let cart =  JSON.parse((localStorage.getItem("cart")));
  console.log(localStorage.getItem("cart"));
}

//Create event listeners for the add item form and display cart button to call the respective functions.

const addItemForm= document.getElementById('addItemForm');
addItemForm.addEventListener
    ('submit', function(event){
        event.preventDefault();
        const itemNameElm = (document.getElementById('itemName')).value;
        const itemPrice = (document.getElementById('itemPrice')).value;
        const itemId = new Date().getTime();
        const item = { id:itemId, name:itemNameElm, price: itemPrice };
        addItem(item); 
    });


// Reset function to reset the cart to no elements
function resetCart(){
  localStorage.setItem("cart", "[]");
}
initializeCart();