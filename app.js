
    var listy=document.getElementById("ppeo")


function addTask() {
    var todo_item = document.getElementById("taskInput");
    if(todo_item.value === ""){
        alert("Please Input some value");
        return;
    }
    var li = document.createElement('li');
    var inp = document.createElement('input');
    inp.setAttribute('id',"getinp")
     inp.setAttribute('value',todo_item.value)
     inp.setAttribute("disabled","disabled")
    li.appendChild(inp);    


    var delBtn = document.createElement('button');
    var delText = document.createTextNode('DELETE');
    delBtn.setAttribute('class','btn');
    delBtn.setAttribute('onclick','deleteItem(this);')
    delBtn.appendChild(delText);

    
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('EDIT');
    editBtn.setAttribute('class','btn');
    editBtn.setAttribute('onclick','updt(this);')
    editBtn.appendChild(editText);


    li.appendChild(delBtn);
    li.appendChild(editBtn);

    


    listy.appendChild(li);


}

function deleteItem(e) {
    e.parentNode.remove()    
}

function deleteAll() {
    listy.innerHTML = "";
}

function updt(e) {


    e.innerHTML = "UPDATE";
    e.style.backgroundColor = "green";
    e.style.color = "white";
    getinp.disabled=false
    e.setAttribute("onclick", "update(this)")
}
function update(e) {
    e.innerHTML = "EDIT"
    e.style.backgroundColor ="white" ;
    e.style.color = "black";
    getinp.disabled = true
    e.setAttribute("onclick", "updt(this)")

}