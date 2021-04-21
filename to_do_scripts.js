// load from localStorage
function loading() {
    if (localStorage.getItem('tasks')) {
        document.getElementById("task_list").innerHTML = localStorage.getItem('tasks');
    }
}



// create new task by click the button
function addTask() {
    var inputValue = document.getElementById("input_text").value;
    var li = document.createElement("li");
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("You need to declare a new task!:)");
    } else {
        document.getElementById("task_list").appendChild(li);
        document.getElementById("input_text").value = '';
    }


}

// line-through function if click on the task
var taskList = document.getElementById("task_list");
taskList.addEventListener('click', function(done) {
    if (done.target.tagName === 'LI') {
        done.target.classList.toggle('checked');
    }

}, false);
// save in localStarage
function saveData() {
    localStorage.setItem('tasks', document.getElementById("task_list").innerHTML);
}
// delete tasks from localStorage and screen
function delData() {
    document.getElementById("task_list").innerHTML = "";
    localStorage.clear();

}