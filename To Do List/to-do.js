const todoList = [];

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
    <button onclick="
      todoList.splice(${i}, 1);  
      renderTodoList();
      "class="delete-todo-button">Mark Completed
      </button>
    `;
  todoListHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

