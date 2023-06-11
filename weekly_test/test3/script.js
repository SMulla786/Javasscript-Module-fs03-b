const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todosContainer = document.getElementById("todosContainer");

// Add event listener to the button for adding new todos
addButton.addEventListener("click", function () {
  const todoText = todoInput.value;
  if (todoText.trim() !== "") {
    const newTodo = createTodoElement(todoText);
    todosContainer.appendChild(newTodo);
    todoInput.value = "";
  }
});

// Function to create a new todo element
function createTodoElement(text) {
  const todo = document.createElement("div");
  todo.classList.add("todos");

  const checkIcon = document.createElement("span");
  checkIcon.innerHTML = "&#x2713;";
  checkIcon.addEventListener("click", function () {
    todo.classList.toggle("checked");
  });

  const todoText = document.createElement("p");
  todoText.innerText = text;

  const deleteIcon = document.createElement("span");
  deleteIcon.innerHTML = "&#x2717;";
  deleteIcon.addEventListener("click", function () {
    todo.remove();
  });

  todo.appendChild(checkIcon);
  todo.appendChild(todoText);
  todo.appendChild(deleteIcon);

  return todo;
}
