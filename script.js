function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;

    if(taskValue === ""){
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskValue;

    li.onclick = function(){
        li.style.textDeccoration = "line-through";
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}