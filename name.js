const nameForm = document.querySelector('.name-box form');
const nameInput = nameForm.querySelector('input');
const todolistTitle = document.querySelector('.todolist_title');

const nameSubmitBtn = document.querySelector('.name_submit_btn');
const nameChangeBtn = document.querySelector('.name_change_btn');

const USER_LS = 'currentUser';

function btnShowHide(option_1, option_2){
    nameForm.classList.replace(option_1, option_2);
    nameSubmitBtn.classList.replace(option_1, option_2);
    nameChangeBtn.classList.replace(option_2, option_1);
}

function changeUserName(event){
    event.preventDefault();
    localStorage.removeItem(USER_LS);

    btnShowHide('hide', 'show');
}

function submitUserName(event){
    event.preventDefault();
    
    const currentValue = nameInput.value;
    localStorage.setItem(USER_LS, currentValue);
    getUserNameForTitle(currentValue);
    btnShowHide('show', 'hide');
}

function getUserNameForTitle(text){
    todolistTitle.innerHTML = `${text}'s<br> TODO List`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser !== null){
        getUserNameForTitle(currentUser);
        btnShowHide('show', 'hide');
    }
}

function init(){
    loadName();
    nameForm.addEventListener('submit', submitUserName);
    nameSubmitBtn.addEventListener('click', submitUserName);
    nameChangeBtn.addEventListener('click', changeUserName);
}

init();