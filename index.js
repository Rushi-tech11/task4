const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dateTime = taskDateTime.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  const dateSpan = document.createElement("span");
  if (dateTime) {
    const dt = new Date(dateTime);
    dateSpan.textContent = dt.toLocaleString();
  } else {
    dateSpan.textContent = "No deadline";
  }
  dateSpan.className = "task-datetime";

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.className = "action";
  editBtn.addEventListener("click", () => editTask(span, dateSpan));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "action";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(dateSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}

function editTask(textSpan, dateSpan) {
  const newText = prompt("Edit your task:", textSpan.textContent);
  const newDate = prompt("Edit date & time (YYYY-MM-DDTHH:MM):", "");

  if (newText) textSpan.textContent = newText;
  if (newDate) {
    const dt = new Date(newDate);
    if (!isNaN(dt)) dateSpan.textContent = dt.toLocaleString();
  }
}
