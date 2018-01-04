
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos(){
    console.log('My todos:' , todos);
}
// function addTodo(){
//     todos.push('new todo');
//     displayTodos();
// }

function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
addTodo('some stuff');

function changeTodo(index, newValue){
   // todos[0] = 'some new value';
   todos[index] = newValue;
   displayTodos()
}

changeTodo(1, 'new todo');
changeTodo(2, 'new todo');

function deleteTodo(position){
    todos.splice(position,1);
}

deleteTodo(0);
displayTodos();




