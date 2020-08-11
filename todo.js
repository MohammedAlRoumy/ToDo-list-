var taskInput = document.getElementById("new-task"); //Add a new task.
var addButton = document.getElementsByTagName("button")[0]; //first button
var tasks = document.getElementById("tasks"); //ul of tasks

tasks.addEventListener("click", function (e) {
    console.log(e.target.className == "done");
    if (e.target.className == "done") {
        changeColor(e.target);
    }

    if (e.target.className == "delete") {
        deleteTask(e.target);
    }

    e.preventDefault();
});

//New task list item
var createNewTaskElement = function (taskString) {
    var listItem = document.createElement("li");

    //label
    var label = document.createElement("label"); //label

    //button.done
    var doneButton = document.createElement("button"); //done button

    //span
    var span = document.createElement("span"); //span

    //span between buttons
    var dash = document.createElement("span"); //span

    // div btn
    var btn = document.createElement("div");

    //button.delete
    var deleteButton = document.createElement("button"); //delete button

    label.innerText = taskString;

    //Each elements, needs appending

    doneButton.innerText = "Make as Done";
    doneButton.className = "done";
    deleteButton.innerText = "Delete";
    dash.innerText = "|";
    dash.className = "dash";
    deleteButton.className = "delete";
    btn.className = "btn";

    span.appendChild(doneButton);
    span.appendChild(dash);
    btn.appendChild(span);
    btn.appendChild(deleteButton);

    listItem.appendChild(label);
    listItem.appendChild(btn);
    return listItem;
};

var addTask = function () {
    if (taskInput.value != "") {
        console.log("Add Task...");

        var listItem = createNewTaskElement(taskInput.value);

        tasks.appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("can not enter empty task ... please enter data");
    }
};

//Set the click handler to the addTask function.
addButton.onclick = addTask;

//Delete task.
var deleteTask = function (elemnt) {
    console.log("Delete Task...");
    var btn = elemnt.parentNode;
    var listItem = btn.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};

//change color task.
var changeColor = function (elemnt) {
    console.log("change color...");
    var span = elemnt.parentNode;
    var btn = span.parentNode;
    var listItem = btn.parentNode;

    listItem.style.color = "green";
    span.style.display = 'none';
};
