const todoList = [];
renderTodoList();
function addToDo(){
  let todoName = document.querySelector('.js-name-input').value;
  let todoDate = document.querySelector('.js-date-input').value;
  let todo = {name: todoName, dueDate:todoDate};
  todoList.push(todo);
  console.log(todoList);
  document.querySelector('.js-name-input').value = '';
  document.querySelector('.js-date-input').value = '';
  renderTodoList();
}

function renderTodoList(){
let todoListHTML = '';
for (let i=0; i< todoList.length; i++){
  const todoItem = todoList[i];
  const todoName = todoItem.name;
  const todoDate = todoItem.dueDate;
  const html = `
    <div>${todoName} </div>
    <div> ${todoDate} </div>
    <button 
      class="delete-todo-button js-delete-todo-button">Mark Completed
      </button>
    `;
  todoListHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button'). 
      forEach((deleteButton, index) => {
          deleteButton.addEventListener('click' , () => {
            todoList.splice(index, 1);  
            renderTodoList();
          });
        
      });
}

document.querySelector('.add-todo-button').
    addEventListener('click', () =>  {
      addToDo();
      }  
    );


