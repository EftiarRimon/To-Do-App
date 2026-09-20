const taskInput=document.getElementById("taskInput")
const TaskList = document.getElementById("TaskList");

let tasks=[];
function addTask(){
    const text=taskInput.value;

    tasks.push({
        id:Date.now(),
        text:text,
        completed:false
    });

    taskInput.value=""
    renderTasks();

}

 
 function deleteTask(){
    tasks.pop();
    renderTasks();
 }

function renderTasks(){
    TaskList.innerHTML=""
    tasks.forEach(function showTask(task){
        const li=document.createElement("li");
        li.textContent=task.text;
        TaskList.appendChild(li);
    });
}
document.getElementById("addTask").addEventListener("click",addTask);
document.getElementById("dltButton").addEventListener("click",deleteTask);


