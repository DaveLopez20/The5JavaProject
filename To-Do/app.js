let addToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('ToDoContainer');
let inputfield = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputfield.value;
  ToDoContainer.appendChild(paragraph);
  inputfield.value = '';
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through';
  })
  paragraph.addEventListener('dblclick', function(){
    ToDoContainer.removeChild(paragraph);
  })
})