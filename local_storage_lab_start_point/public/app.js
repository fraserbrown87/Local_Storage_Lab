var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
    // - loop through the array of todos, invoking addItem() for each todo item
  for(let item of todos){
    addItem(item);
  }
}

var addItem = function (item) {
    // this function needs to:
  var ul = document.querySelector('#todo-list');
    // - create an li element containing the string 'item'
  let list1 = document.createElement("li");
    // - append the li to the "todo-list" ul
  list1.innerText = item;
  ul.appendChild(list1);
}

var handleButtonClick = function () {
  // this function needs to:
    // - get hold of the input box's value
  var input = document.querySelector('#new-item')
  var value = input.value;
    // - append it to the "todo-list" ul by invoking addItem()
  var valueToDisplay = addItem(value);
    // - add it to local storage by invoking save()
  save(value);
}

var save = function (newItem) {
  // this function needs to:
    // - get the data back from local storage and parse to an array
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  // - add the newItem to the array
  todosArray.push(newItem);
    // - stringify the updated array
  var jsonString = JSON.stringify(todosArray)
  localStorage.setItem('todoList', jsonString);
  // - save it back to localstoage
}

window.addEventListener('load', init);
