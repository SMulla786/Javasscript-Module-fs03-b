const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todosContainer = document.getElementById("todosContainer");

// Retrieve todos from local storage on page load
window.addEventListener("load", function () {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(function (todo) {
    const newTodo = createTodoElement(todo.text, todo.checked);
    todosContainer.appendChild(newTodo);
  });
});

// Add event listener to the button for adding new todos
addButton.addEventListener("click", function () {
  const todoText = todoInput.value;
  if (todoText.trim() !== "") {
    const newTodo = createTodoElement(todoText, false);
    todosContainer.appendChild(newTodo);
    saveTodosToLocalStorage();
    todoInput.value = "";
  }
});

// Function to create a new todo element
function createTodoElement(text, checked) {
  const todo = document.createElement("div");
  todo.classList.add("todos");
  if (checked) {
    todo.classList.add("checked");
  }

  const checkIcon = document.createElement("span");
  checkIcon.innerHTML = "&#x2713;";
  checkIcon.addEventListener("click", function () {
    todo.classList.toggle("checked");
    saveTodosToLocalStorage();
  });

  const todoText = document.createElement("p");
  todoText.innerText = text;

  const deleteIcon = document.createElement("span");
  deleteIcon.innerHTML = "&#x2717;";
  deleteIcon.addEventListener("click", function () {
    todo.remove();
    saveTodosToLocalStorage();
  });

  todo.appendChild(checkIcon);
  todo.appendChild(todoText);
  todo.appendChild(deleteIcon);

  return todo;
}

// Function to save todos to local storage
function saveTodosToLocalStorage() {
  const todos = Array.from(todosContainer.children).map(function (todo) {
    return {
      text: todo.querySelector("p").innerText,
      checked: todo.classList.contains("checked"),
    };
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
