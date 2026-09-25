const taskInput=document.getElementById("taskInput")
const TaskList = document.getElementById("TaskList");

let tasks=JSON.parse(localStorage.getItem("tasks")) ||[];

function addTask(){
    const text=taskInput.value.trim();
    
    if(text==""){
        alert("write something")
    } else{
    
    tasks.push({

        
        id:Date.now(),
        text:text,
        completed:false
    });

    taskInput.value=""
    renderTasks();

}
}


function DeleteTask(id){
  const updatedTask=tasks.filter(function(task){
    return task.id !==id;
  })
  tasks=updatedTask;
  renderTasks();
}

function EditTask(id){
    const task=tasks.find(function(t){
        return t.id===id;

})
   const newText=prompt("Edit Task:", task.text);
        task.text=newText;
        renderTasks();
}

function toggleComplete(id){
    const task=tasks.find(function(t){
        return t.id===id;
    });

    task.completed=!task.completed;
    renderTasks();
}

function renderTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    TaskList.innerHTML = "";

    tasks.forEach(function showTask(task, index){

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = "Task " + (index + 1) + ": " + task.text;
        if (task.completed) {
            span.style.textDecoration = "line-through";
            span.style.opacity = "0.5";
        }

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = task.completed;
        checkBox.addEventListener("click", function(){
            toggleComplete(task.id);
        });

        const editButton = document.createElement("button");
        editButton.textContent = "edit";
        editButton.addEventListener("click", function(){
            EditTask(task.id);
        });

        const DltButton = document.createElement("button");
        DltButton.textContent = "Delete";
        DltButton.addEventListener("click", function(){
            DeleteTask(task.id);
        });

        // সব বানানো শেষ, এখন একসাথে বসাও (এই ক্রমে দেখাবে)
        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(DltButton);

        TaskList.appendChild(li);
    });
}

renderTasks();
document.getElementById("addTask").addEventListener("click",addTask);


