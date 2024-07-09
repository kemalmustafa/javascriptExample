function newElement(){
var list = document.querySelector("#list");
var li = document.createElement("li");
var task = document.querySelector("#task");
li.innerHTML = (task.value);
list.appendChild(li);

};