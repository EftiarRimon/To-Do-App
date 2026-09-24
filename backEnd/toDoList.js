const taskInput=document.getElementById("taskInput")
const TaskList = document.getElementById("TaskList");

let tasks=[];

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
    TaskList.innerHTML=""
    tasks.forEach(function showTask(task, index){

        const li=document.createElement("li");
        li.textContent="task"+(index+1)+":"+task.text;
        if (task.completed) {
            h1.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }

        TaskList.appendChild(li);

        const DltButton=document.createElement("Button");
        DltButton.textContent="Delete"
        li.appendChild(DltButton);
        DltButton.addEventListener("click", function(){
            DeleteTask(task.id)
        })
        const editButton=document.createElement("Button")
        editButton.textContent="edit"
        li.appendChild(editButton);
        editButton.addEventListener("click",function(){
            EditTask(task.id)
        })

        const checkBox=document.createElement("input");
        checkBox.type="checkbox";
        checkBox.checked=task.completed;

        checkBox.addEventListener("click",function(){
            toggleComplete(task.id);
        });
        li.appendChild(checkBox);

        
        
    });
}
document.getElementById("addTask").addEventListener("click",addTask);


