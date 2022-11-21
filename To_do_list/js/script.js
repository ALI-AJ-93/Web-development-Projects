document.getElementById ('add').addEventListener ('click', addTask, false);

// Add tasks to the task menu
var i = 1;
function addTask () {
    var task = document.getElementById ('taskField').value;
    var taskMenu = document.getElementById (i);
    taskMenu.textContent += task;
    var checkbox =  document.createElement ('input');
    checkbox.setAttribute ('type', 'checkbox');
    taskMenu.appendChild (checkbox);
    i++;


    // Check & Uncheck the tasks
    taskMenu.addEventListener ('change', strikeThrough, false);
    function strikeThrough (e) {
        var el = e.target;
        if (el.checked) {
            index = e.target.parentElement;
            index.className = 'done';
        }
        else {
            index = e.target.parentElement;
            index.className = '';
        }
    }
}
