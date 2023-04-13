const users = [
  {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
  {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
  {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
  {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
  {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
  {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
  {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
  {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

//Find a user named 'Jose'
const userJose = users.find(x => x.firstName === 'Jose');
console.log("Details of user Jose:", userJose);

//Get an array of all the premium members
const premiumMemberUsers = users.filter ( x => x.isPremiumMember);
console.log("Array of all premium members:", premiumMemberUsers);

//Get an array of all the user last names
const userLastName = users.map ( x => x.lastName);
console.log("Array of all users last name:", userLastName);

//Get an array of the full names who have logged in more than 10 times
const moreThanTen = function (arr){
  if (arr.logins > 10){
    return arr;
  }
  
}
const loginMoreTen = users.filter(moreThanTen);
const loginMoreTenName = loginMoreTen.map(x => x.firstName + " " + x.lastName);
console.log("Array of full name of users with Login more than 10:", loginMoreTenName);



// Get the total number of logins for the list of users
const total = function (sum, curr){
  sum = curr.logins + sum; 
  return sum;
}

const totalLogins = users.reduce(total,0);
console.log("Total number of Logins:", totalLogins);