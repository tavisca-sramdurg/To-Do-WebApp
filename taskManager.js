function openSection(event, pageName) {
    var i, content, navButtons;
    content = document.getElementsByClassName("content");
    for(i = 0; i < content.length; i++){
      content[i].style.display = "none";
    }
  
    navButtons = document.getElementsByClassName("navButtons");
    for(i = 0; i < content.length; i++){
      navButtons[i].className = navButtons[i].className.replace(" active","");
    }
    document.getElementById(pageName).style.display = "block";
    event.currentTarget.className += " active";
    
  }

var taskCounter = 1;

function AddTask(x){
    x.preventDefault();
    let tasksFormId = document.getElementById("tasksFormId");
    let toDoTable = document.getElementById("toDoTableId");

    //Column1
    let tablerow = document.createElement('tr');
    let tableDataColumn1 = document.createElement('td');
    tableDataColumn1.innerHTML = taskCounter + ") ";
    tablerow.append(tableDataColumn1);

    //Column2
    let tableDataColumn2 = document.createElement('td');
    tableDataColumn2.id = taskCounter;
    tableDataColumn2.innerHTML = tasksFormId.value;
    tablerow.append(tableDataColumn2);

    //Column3
    let tableDataColumn3 = document.createElement('td');
    tableDataColumn3.innerHTML = '<button class="Delete" id="deleteButton" onclick="deleteTask(event,' + taskCounter + ')">Delete</button>';
    tablerow.append(tableDataColumn3);

    //Column4
    let tableDataColumn4 = document.createElement('td');
    tableDataColumn4.innerHTML = '<button class="Edit" id="editButton" onclick="editTask(event,' + taskCounter + ')">Edit</button>';
    tablerow.append(tableDataColumn4);

    if(tasksFormId.value != ""){
        toDoTable.appendChild(tablerow);
        tasksFormId.value = "";
    }
    taskCounter++;
}

function deleteTask(event, id){
    event.preventDefault();
    let tabledata = document.getElementById(id);
    tabledata.parentElement.parentElement.removeChild(tabledata.parentElement); //removing the row 
}

function editTask(event, id){
    event.preventDefault();
    let tabledata = document.getElementById(id);
    tabledata.innerHTML = prompt("Edit task", document.getElementById('tasksFormId').value);
    
}

function searchTask(){
    let tasksFormId = document.getElementById("tasksFormId");
    let task = tasksFormId.value;
    task = task.trim();
    for (var i = 0; i < taskCounter; i++) {
        let temp = document.getElementById(i);

        if (temp != null) {
            if (temp.innerHTML.includes(task) && task != "") {
                temp.parentElement.style.backgroundColor = "#fffd6b";
            } else {
                temp.parentElement.style.backgroundColor = "";
            }
        }
    }
}