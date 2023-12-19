function add() {
  //Accessing todo id
  var todoRef = document.getElementById("todo");
  //  creating li Element
  var li = document.createElement("li");
  //checking not empty string then adding to ul and li element
  if (todoRef.value !== "") {
    li.innerText = todoRef.value;
    document.getElementById("ul").appendChild(li);
    todoRef.value = "";
  }
}
