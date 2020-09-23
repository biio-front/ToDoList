const todoForm = document.querySelector('.input_todo');
const todoInput = todoForm.querySelector('input');

const toDoList_table = document.querySelector('#toDoList');

const TODOLIST_LS = 'toDoList';
const toDoList = [];

function saveList(){
    console.log(toDoList);
    localStorage.setItem(TODOLIST_LS, JSON.stringify(toDoList));
}

function Add_list(text){    
    const tr = document.createElement('tr');
    const todoChk = document.createElement('input');
    const td_1 = document.createElement('td');
    const td_2 = document.createElement('td');
    const newId = toDoList.length + 1;

    todoChk.setAttribute('type', 'checkbox');
    todoChk.setAttribute('class', 'chk');
    td_1.appendChild(todoChk);

    td_2.innerHTML = text;

    tr.appendChild(td_1);
    tr.appendChild(td_2);
    tr.id = newId;

    toDoList_table.appendChild(tr);

    const toDoObj = {
        id: newId,
        text: text,
        completed: false
    };
    toDoList.push(toDoObj);
    saveList();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    Add_list(currentValue);
    todoInput.value = '';
}

function loadToDo(){
    const loadedToDoList = localStorage.getItem(TODOLIST_LS);
    if(loadedToDoList !== null){
        const paresedToDoList = JSON.parse(loadedToDoList);
        paresedToDoList.forEach(function(toDo){
            Add_list(toDo.text);
        })
    }
}

function init(){
    const toDoBtn = document.querySelector('.name_change_btn');
    loadToDo();

    todoForm.addEventListener('submit', handleSubmit);
    toDoBtn.addEventListener('click', handleSubmit);
}

init();