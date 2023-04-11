function Person(firstName,lastName,favColor,favNumber,favFoods){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favColor = favColor;
  this.favNumber = favNumber;
  this.favFoods = favFoods;
}

Person.prototype.family = [];

Person.prototype.fullName = function (){
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function (){
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favColor}, Favorite Number: ${this.favNumber}`;
}

Person.prototype.addToFamily = function(newFamilyMember){
  if (newFamilyMember instanceof Person && !this.family.includes(newFamilyMember)){
  this.family.push(newFamilyMember);
}
  //console.log(this.family.length);
  return this.family.length ;

}

let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
console.log(peter.fullName());
//console.log(peter);
console.log(peter.toString());
let jane = new Person("Jane", "J", "Blue", 2, ['Burger', 'Fries']);


let john = new Person("John", "JJ", "Green", 56, ['Bread', 'Jam']);
peter.addToFamily(peter);
john.addToFamily (john);
jane.addToFamily(jane);
console.log(jane.addToFamily());
console.log("Family array:", jane.family);









