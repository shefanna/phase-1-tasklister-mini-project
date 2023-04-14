document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const newTask = document.createElement('li');
  const taskDescription = document.querySelector('#new-task-description');
  newTask.innerText = taskDescription.value;

  taskList.appendChild(newTask);

  taskDescription.value = '';
});
});
