const inputBox = document.getElementById("inputBox");
const addbtn = document.getElementById("addbtn");
const toDoList = document.getElementById("toDoList");

let editTodo = null;

addbtn.addEventListener('click', addTodo);
toDoList.addEventListener('click', updateTodo);

function addTodo(){
    const inputText = inputBox.value.trim();

    if(inputText.length <= 0){
        alert("You Must Write Something");
        return false;
    }

    if (addbtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addbtn.value = "Add";
        inputBox.value = "";
    }
    else {

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);


    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
    inputBox.value = "";
    }
}


function updateTodo(e){
    if (e.target.innerHTML === "Remove") {
        toDoList.removeChild(e.target.parentNode);
}

if(e.target.innerHTML === "Edit"){
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addbtn.value = "Edit";
    editTodo = e;
}
}