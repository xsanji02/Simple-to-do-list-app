let enterTodoButton = document.getElementById("enterTodoButton");
let enterTodoText = document.getElementById("enterTodoText");
let remove = document.getElementById("removeButton");
let newList = document.getElementById("list");
let todoItem = document.getElementsByClassName("listitem");

enterTodoButton.addEventListener("click", function(){

   if (enterTodoText.value == '' || enterTodoText.value == null || enterTodoText.value == undefined) {
      alert("you must filled out")
      return
   } 
   addTodo();
});

//removing this code it cause deleting existing list

// document.addEventListener("keydown", function(event){
//    if (event.key === 'Delete' || event.key === 'Backspace') {
//       todoItem[0].remove();
//    }
// })

remove.addEventListener("click", function(){
   todoItem[0].remove();
   })

document.addEventListener("keydown", function(event){
 if (event.key === 'Enter') {
   if (enterTodoText.value == "") {
      enterTodoText.style.border = "thick solid red";
      alert("Please filled out the blanks!!!")
   } else {
      enterTodoText.style.border = null;
      addTodo();
   }
} 
});


function addTodo() {
   let paragraph = document.createElement("li");
   paragraph.className = 'listitem'
   paragraph.innerText = enterTodoText.value;
   newList.appendChild(paragraph);
   paragraph.style.color = "black";
   enterTodoText.value = "";

   
   paragraph.addEventListener("click", function(){
      paragraph.style.textDecoration = 'line-through';
   })

   paragraph.addEventListener("dblclick", function(){
      paragraph.style = null;
      paragraph.style.color = "black";
   })
}