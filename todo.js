let tasks = [];
let doneTasks = [];


function taskAdded()
{
  let task = document.getElementById("task").value;

  if(!task){
  return;
}

//   let element = "<li><span>" + task + "</span>&nbsp;<button>Done</button></li>"
//   document.getElementById("todo-list").innerHTML += element;
//   document.getElementById("task").value = "";

tasks.push(task);
renderTask();
document.getElementById("task").value = "";

}

function renderTask()
{
  let element = "";
  for(let i = 0; i < tasks.length; i++)
  {
    element += "<li><span>" + tasks[i] + "</span>&nbsp;<button class='btn2' id=" + i + " onclick='onTaskDelete(" + i + ")'>Done</button></li>"
  }
  document.getElementById("todo-list").innerHTML = element;
}


function renderDoneTask(task)
{
  let ele = "<li class='done-li'>" + task + "</li>"
  document.getElementById("done-list").innerHTML += ele;
}

function onTaskDelete(index)
{
  doneTasks.push(tasks[index]);
  renderDoneTask(tasks[index]);
  tasks.splice(index, 1);

  
  renderTask();
}

