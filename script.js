const newTodo = document.getElementById("write-name");

const list = document.getElementById("list");

const todoArray = [];

function onDelete(index) {
  todoArray.splice(index, 1);

  render();
}

function render() {
  list.innerHTML = todoArray.reduce(
    (acc, todo, index) =>
      acc +
      `
    <div class="todo">
      <div class="checkbox">
        <button class="check" onclick="onCheck(${todo.checked}, ${index})">${
          todo.checked ? `<img class="check-icon" src="check.png"/>` : ""
        }</button>
      </div>
      <div class="task">
        ${todo.text}
        <button class="trash" data-open="true" onclick="onDelete(${index})" onmouseenter="openTrash(true, event)" onmouseleave="openTrash(false, event)">
          <img class="trash-icon" src="trash.png" />
        </button>
      </div>
    </div>
  `,
    ""
  );
}

function onEnter(event) {
  event.preventDefault();

  if (!newTodo.value) return;

  todoArray.push({ text: newTodo.value, checked: false });

  newTodo.value = "";

  render();
}

function openTrash(status, event) {
  const url = status ? "trash-open.png" : "trash.png";
  event.target.children[0].src = url;
}

function onCheck(checked, index) {
  todoArray[index].checked = !checked;

  render();
}
