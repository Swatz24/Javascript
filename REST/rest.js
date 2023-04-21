// Get all posts and display when the button is clicked.

const allPostButton = document.querySelector('.js-all-posts');
    allPostButton.addEventListener
      ('click' , () => fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then(function(json) {
          let displayHtml; 
          document.querySelector('.js-display').innerHTML='';
          json.forEach((json, index)=>{
          console.log(json.body);
         
          displayHtml = `<p>${JSON.stringify(json)}</p>`;
          
          document.querySelector('.js-display').innerHTML += displayHtml;
          });
        }
      ));

// Get post with id of 10 and display when the button is clicked.
  const postId10 = document.querySelector('.js-post-10');
  postId10.addEventListener
    ('click', () => fetch('https://jsonplaceholder.typicode.com/posts/10')
  .then((response) => response.json())
  .then((json) => {
      console.log(json); 
      const displayHtml = document.querySelector('.js-display');
      displayHtml.innerHTML ='';
      displayHtml.innerHTML = `<p>${JSON.stringify(json)}</p>`;
  })
    );


//Create a new post and log the id generated for it by the server

const createPost = document.querySelector('.js-create');

createPost.addEventListener
('click', () => 
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'New post new title',
    body: 'this is the body of the new post.',
    userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.id);
      const displayHtml = document.querySelector('.js-display');
      displayHtml.innerHTML ='';
      displayHtml.innerHTML = `<p>The ID of the new post that was created : ${json.id}</p>`;
    })
);

//Replace the post with id of 12 and render the responseJSON

const replacePost = document.querySelector('.js-replace');

replacePost.addEventListener
    ('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
      method: 'PUT',
      body: JSON.stringify({
        id: 12,
        title: 'this is the replaced post12',
        body: 'this is the new text in the post with id 12',
        userId: 12,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const displayHtml = document.querySelector('.js-display');
        displayHtml.innerHTML ='';
        displayHtml.innerHTML = `<p>Replaced Post:</p>
                                <p>${JSON.stringify(json)}</p>`;
       })
  }
    );

//Update the title of post with id of 12 and render responseJSON    

const updatePost = document.querySelector('.js-update');

updatePost.addEventListener
    ('click', () => 
      {
        fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'New title post 12',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => 
          {
            console.log(json);
            const displayHtml = document.querySelector('.js-display');
            displayHtml.innerHTML ='';
            displayHtml.innerHTML = `<p>Post with Id 12 with the updated title: ${JSON.stringify(json)}</p>`;

          } )
      }
    );      

//Delete the post with id of 12 and render a success message

const deletePost = document.querySelector('.js-delete');

deletePost.addEventListener
    ('click' , () => 
      {  
      fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
       }).then(function(){
        console.log("Deleted successfully");

        const displayHtml = document.querySelector('.js-display');
        displayHtml.innerHTML ='';
        displayHtml.innerHTML = `<p>Post with Id 12 is deleted successfully!!</p>`;
       })
      });
