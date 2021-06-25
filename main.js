
var list = document.querySelector('.list');

function addTask() {
    var todo_item = document.getElementById("taskInput");
    if(todo_item.value === ""){
        alert("Please Input some value");
        return;
    }
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);


    var delBtn = document.createElement('button');
    var delText = document.createTextNode('DELETE');
    delBtn.setAttribute('class','btn');
    delBtn.setAttribute('onclick','deleteItem(this);')
    delBtn.appendChild(delText);

    
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('EDIT');
    editBtn.setAttribute('class','btn');
    editBtn.setAttribute('onclick','editItem(this);')
    editBtn.appendChild(editText);


    li.appendChild(delBtn);
    li.appendChild(editBtn);

    list.appendChild(li);

    todo_item.value = "";
    console.log(li)

}

function deleteItem(e) {
    e.parentNode.remove()    
}

function deleteAll() {
    list.innerHTML = "";
}

function editItem(e) {
    console.log(e.parentNode)
    var val = prompt("Enter updated value ",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}