let groupMembers = ['Swathika Ravindran','Forward Alexander','Ahmad Khan','Karen Ngo','Senna Smith'];
let lengthGroup = groupMembers.length;
console.log("Number of members in my group:", lengthGroup);

for(let i=0;i<lengthGroup;i++){
  let j=i+1;
  console.log("Group member" + j ,":" + groupMembers[i]);
}
let differentFood = ['donuts','bagel', 'pancakes','waffles','eggs','bread','mashed potatoes','pb jelly','sandwich','burger'];

let numberOfFood = differentFood.length;
console.log("Number of food types:", numberOfFood);
for(let i=0;i<numberOfFood;i++){
  let j=i+1;
  console.log("Food" + j ,":" + differentFood[i]);
}
console.log(differentFood.indexOf('waffles'));

let stateCapitalBird = [['Alabama', 'Montgomery', 'YellowHammer'], ['Colorado','Denver','Lark Bunting'],['Florida','Tallahassee','Mockingbird'], ['Indiana','Indianapolis','Cardinal'] ,['Maine','Portland','Chickadee'],['North Carolina','Raleigh','Cardinal'],['South carolina', 'Columbia','Carolina Wren']];
console.table(stateCapitalBird);
let totalStates =stateCapitalBird.length;
console.log("Number of States:" + totalStates);
for(let i=0; i<totalStates;i++){
  let j=i+1;
console.log("State, Capital , State Bird" , j , ":" + stateCapitalBird[i,i,i]);
}
console.log(stateCapitalBird[4][2]);
