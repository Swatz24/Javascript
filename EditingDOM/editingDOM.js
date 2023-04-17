//Update the 'Apples' item to say 'Granny Smith Apples'
let liElm = document.querySelector('li').nextElementSibling;
liElm.innerHTML = "Granny Smith Apples";

//Remove 'Oat Milk' from the list
document.getElementById('list').lastElementChild.remove();

//Add an item 'Kombucha'
const newLi = document.createElement('li');
newLi.innerHTML = "Kombucha";

const list = document.querySelector('#list');
list.appendChild(newLi);

//Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
const listElms = document.getElementById('list').children;
//console.log(listElms);


const listLength = (document.getElementById('list').children).length;
console.log(listLength);
for(i = listLength-1; i>=0; i--){
  
   listElms[i].remove();

} 

const newList = ['protein bars', 'almonds', 'peanut butter'];
for(i=0; i<newList.length; i++)
{   let newItem = document.createElement('li');
   newItem.innerHTML = newList[i];
     //console.log(newItem[i].innerHTML);
   list.appendChild(newItem);
}
// const newList = ['protein bars', 'almonds', 'peanut butter'];
// newList.map(item => {
//   let newlist1 = document.createElement('li');
//   newlist1.innerHTML = item;
//   list.append(newlist1);
// });



// Add the class 'important' to the almonds item.

const almondElm = document.querySelector('ul').children[1];

almondElm.className = "important";

console.log(almondElm);