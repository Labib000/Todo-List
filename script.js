const inputBox = document.getElementById("inputBox");
const addbtn = document.getElementById("addbtn");
const toDoList = document.getElementById("toDoList");

addbtn.addEventListener('click', addTodo);

function addTodo(){
    const inputText = inputBox.value.trim();

    if(inputText.length <= 0){
        alert("You Must Write Something");
        return false;
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    toDoList.appendChild(li);
    inputBox.value = "";
}