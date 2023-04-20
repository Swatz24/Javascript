//Create an array of user objects called users. Each user object should have an id, name, and email property.
const users = [
                {id: 1 , name: 'swathi', email: 'abc@gmail.com' }, 
                {id : 2, name:'peter' , email:'peter@gmail.com'},
                {id: 3, name:'susan', email:'susan@yahoo.com'}
              ];

console.log("List of Users:", users);


// Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise. The promise should resolve with the user object if the user with the given ID exists in the users array. Otherwise, it should reject with an error message. Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.

function fetchUserById(userId) {
  const pr = new Promise(function(resolve,reject){
    setTimeout(function(){
      let userInfo = users.find((user)=> user.id === userId);
      if(userInfo){
        resolve(userInfo);
      }else{
        reject("User Id is Invalid.");
      }

    },1000)

  }
  );
  return pr;
}


//Use the fetchUserById function to fetch the user with ID 1. Log the user object if the promise is fulfilled and the error message if the promise is rejected. Next, chain another fetchUserById call to fetch the user with ID 2. Log the user object if the promise is fulfilled and the error message if the promise is rejected.

fetchUserById(1)
  .then(function(userInfo){
    console.log("User Information" , userInfo);
    return fetchUserById(2);
  }).then(function(userInfo){
    console.log("User Information:", userInfo);
  })
  .catch(function(err){
    console.log(err);
  });