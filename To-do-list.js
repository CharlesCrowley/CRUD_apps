let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragpraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = ""; // RESETS THE INPUT FIELD TO EMPTY AFTER ADDING. 
  paragraph.addEventListener('click', function(){ // PUTS A LINE THROUGH STORED ITEMS UPON SINGLE CLICK. 
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener('dblclick', function(){ // GETS RID OF STORED ITEMS UPON DOUBLE CLICK. 
    toDoContainer.removeChild(paragraph);
  });
});
