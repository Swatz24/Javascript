function outer(){
          // Update the inner function to take two parameters named a and b.
        function inner(a,b){
          // Log the values of a and b in the inner function.
        console.log(a);
        console.log(b.name);
        console.log(b.gender);

        //Inside the inner function, assign new values to a and b and log them at the end of the function 
        a= 'test2';
        b = {
          name : 'xyz',
          gender : 'male'
            }
            console.log(a);
            console.log(b.name);
            console.log(b.gender);

            //Inside the inner function, update a property of the b object.

            b.gender = 'female';
            // Log to view the update
            console.log(b);

          }
          
       //Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.    
      let a = 'test';
      let b = {
        name : 'swathi',
        gender : 'female'
      }
console.log(a);
console.log(b.name);
console.log(b.gender);
    
  //Pass a and b in as arguments when you execute inner().    
  inner(a,b);

  // log a and b after the execution of inner(a,b).
  console.log(a);
  console.log(b.name);
  console.log(b.gender);
}

outer();