const todo_container = document.getElementsByClassName("todo-container");
const todo_header = document.getElementsByClassName("todo-header");

const task_list = document.querySelector(".task-list");
const input_value = document.querySelector(".input-task");

// on clicking the add task button.
function add_task() {
  // if the empty task is submitted!
  if (input_value.value == "") {
    alert("Enter the task and press the button!");
  } else {
    // creating the li element for each click of the add task button with the task text.
    const task = document.createElement("li");

    task.innerHTML = document.querySelector(".input-task").value;

    //   adding the li to the ul element.
    task_list.appendChild(task);

    //   unwanted spaces before and after the task text is trimmed out.
    input_value.value.trim();

    //   after pressing the button the input box must become empty.
    input_value.value = "";
  }
}
