function addTask(){
    let taskInput = document.getElementById("taskInput");
    let todoList = document.getElementById("todo-list");
    let taskText = taskInput.value.trim();

    if(taskText !==""){
        let taskElement = document.createElement("li");
        taskElement.className = "task";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function(){
            texTestSpan.classList.toggle("completed")
        }

        let texTestSpan =  document.createElement("span");
        texTestSpan.textContent = taskText;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function(){
            todoList.removeChild(taskElement);
        }

        taskElement.appendChild(checkbox);
        taskElement.appendChild(texTestSpan);

        todoList.appendChild(taskElement);

        taskInput.value = "";



    }

}