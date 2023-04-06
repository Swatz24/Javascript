let taskManager = (function() {
  let tasks = [];

  function addTasks(taskDescription) {
    tasks.push(taskDescription);
    // Display the added task.
    console.log(`Task : ${taskDescription}`);
  }

  function displayTasks() {
    console.log("List of Tasks:")
    console.log(`${tasks}`);
  }

  return {
    addTasks : addTasks,
    displayTasks: displayTasks
  };

})();

taskManager.addTasks('Do Laundry'); // Adding 1st Task
taskManager.addTasks('Do Dishes'); // Adding 2nd Task
taskManager.addTasks('Clean the Living room'); // Adding 3rd Task
taskManager.displayTasks();



