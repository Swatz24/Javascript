const storeOwners = [
  { charles: 1 },
  { sally: 1 },
  { cassandra: 1 },
  { "Danny Shavez": 1,
      location: "in NM",
  }
];

const listNumberOfStores = function () {
  let totalLocations =0;
for (let i = 0; i < storeOwners.length; i++) {
       totalLocations++;
}
return totalLocations; // return totalLocations instead of i , to get the total.
};
// Using the function after its initialized and defined.
let locations = listNumberOfStores();

// To calculate the total stores but the function is not called in this program.
function tellMeMyStores() {
console.log("Hey, can you tell me how many stores you have?");
  if (locations > 0) {
         console.log("Of course, we have " + locations + " stores");
}
}

function hasStore() {
for (let i = 0; i <=2; i++)  // Edited i < 2 to i <=2 to display 3 store owners.
{
        people = storeOwners[i]; 
        let person = Object.keys(people);
        console.log("Yes, " + person + " has one");
}
}

//tellMeMyStores();
console.log("Hey, can you tell me who owns stores?") // Added this console.log to match the given o/p
hasStore();

let man = Object.keys(storeOwners[3]); // Changed index from 2 to 3
let mister = man[0];  // Changed index to 0 to point the first element of the mann array.
 
let whereHeLives = storeOwners[3].location;  // Changed to object to point to the location of the 4th store owner.
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");