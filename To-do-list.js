let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() { //addToButton element gets an even listener which listens out for a click upon which the function exectures.
  var paragraph = document.createElement('p'); //CREATES PARAGRAPH TO STORE ITEMS
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
