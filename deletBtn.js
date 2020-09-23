const Btn = document.querySelector('.btn-box');
const DelSel = Btn.querySelector('.DelSel');
const DelAll = Btn.querySelector('.DelAll');
const checkBox = document.querySelectorAll('.chk');

function completedList(event){
    const completedChk = event.target;
    const tr = completedChk.parentElement.parentElement;

    tr.classList.toggle('completed');
    console.log(tr.id);
    console.log(toDoList);
}

function delSel(){
    for(let i in checkBox){
        if(checkBox[i].checked){
            toDoList_table.removeChild(checkBox[i].parentElement.parentElement);
            toDoList.splice(i, 1);
            saveList();
        }
    }
}

function delAll(){
    const listChild = toDoList_table.children;

    for(let i = 0; i < listChild.length; i++){
        toDoList_table.removeChild(listChild[i]);
        toDoList.pop();
        saveList();
        i--;
    }
}

function init(){
    DelSel.addEventListener('click', delSel);
    DelAll.addEventListener('click', delAll);
    [].forEach.call(checkBox, function(chk){
        chk.addEventListener('click', completedList);
    })
}

init();