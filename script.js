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
    input_value.value = input_value.value.trim();
    const task = document.createElement("li");
    const task_text = document.createElement("span");
    task_text.style.display = "inline-block";
    task.appendChild(task_text);
    task_text.innerHTML = document.querySelector(".input-task").value;

    //   adding the li to the ul element.
    task_list.appendChild(task);

    //   unwanted spaces before and after the task text is trimmed out.
    // adding checkbox
    const finish_checkbox = document.createElement("input");
    finish_checkbox.type = "checkbox";
    finish_checkbox.value = "checked";
    task.appendChild(finish_checkbox);

    // when the check box is create it creates the event listner and add to the checkbox , even when in function is inside the funcition it can execute.
    finish_checkbox.addEventListener("change", function () {
      if (finish_checkbox.checked) {
        task_text.style.textDecoration = "line-through";
      } else {
        task_text.style.textDecoration = "none";
      }
    });

    // adding button
    const btn_delete = document.createElement("button");
    btn_delete.innerHTML = "Delete Task";
    task.appendChild(btn_delete);
    // btn_delete.onclick = function () {
    //   deleteTask(this);
    // };
    btn_delete.addEventListener("click", function () {
      let listItem = btn_delete.parentElement;
      listItem.remove();
    });
    //   after pressing the button the input box must become empty.
    input_value.value = "";
  }
}

