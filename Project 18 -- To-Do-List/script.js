const userInput = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const btn = document.getElementById("add-btn");

const storage = JSON.parse(localStorage.getItem('text'));
const getStorage = storage !== null ? storage : [];

btn.addEventListener("click", () => {
  const value = userInput.value;
  const element1 = document.createElement("li");
  element1.textContent = value;
  const element2 = document.createElement("button");
  element2.textContent = "remove";
  element2.classList.add("delete-btn");
  element1.appendChild(element2);
  list.appendChild(element1);
  getStorage.push(value);

  updateStorage(getStorage);
  userInput.value = "";
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const taskItem = e.target.parentElement;
    const taskText = taskItem.firstChild.textContent;
    taskItem.remove();

    const index = getStorage.indexOf(taskText);
    if(index > -1)
      {
        getStorage.splice(index, 1);
        updateStorage(getStorage)
      }
  }
});

function updateStorage(arrTask)
{
  localStorage.setItem('text', JSON.stringify(arrTask));
}