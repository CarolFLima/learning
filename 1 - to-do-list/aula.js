const btn = document.getElementById("btn");
const taskList = document.getElementById('task-list');
const completeList = document.getElementById('complete-list');

eventListeners();

function eventListeners() {
  btn.addEventListener('click', newTask);
  taskList.addEventListener('click', removeTask);
  taskList.addEventListener('click', completeTask);
  completeList.addEventListener('click', removeTask)
}

function newTask(e) {
  e.preventDefault();

  const task = document.getElementById('inputTask').value;
  document.getElementById('inputTask').value = '';
  
  const li = document.createElement('li');
  li.textContent = task;

  const checkBtn = document.createElement('a');
  checkBtn.classList = 'checked-task';
  checkBtn.textContent = '✓';
  
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-task';
  removeBtn.textContent = 'X';

  li.appendChild(removeBtn);
  li.appendChild(checkBtn);

  //add to the list
  taskList.appendChild(li);

}

function removeTask(e) {
  if (e.target.classList.contains('remove-task')) {
    e.target.parentElement.remove();
  }
}


function completeTask(e) {
  if (e.target.classList.contains('checked-task')) {
    let taskText = e.target.parentElement.textContent;
    taskText = taskText.substring(0, taskText.length - 2);

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-task';
    removeBtn.textContent = 'X';

    const li = document.createElement('li');
    li.textContent = taskText;

    li.appendChild(removeBtn);

    completeList.appendChild(li);
    completeList.classList ='complete-task';

    e.target.parentElement.remove();
  }
}