// Initialize an empty array to store tasks
let tasks = [];

// Function to add a task to the list
function addTask(task) {
  tasks.push(task);
  console.log(`Task "${task}" added.`);
  displayTasks();
}

// Function to remove a task from the list
function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    const removedTask = tasks.splice(index, 1);
    console.log(`Task "${removedTask}" removed.`);
    displayTasks();
  } else {
    console.log("Invalid task index.");
  }
}

// Function to display the current list of tasks
function displayTasks() {
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Adding and removing tasks
addTask("Buy groceries");
addTask("Finish homework");
addTask("Call mom");
removeTask(1);

// Displaying the current list of tasks
displayTasks();
