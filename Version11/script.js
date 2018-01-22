var todoList = {
    todos: [],
    addTodo: function(todo) {
        this.todos.push({
            todoText: todo,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        //get completed todos
        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });
//case 1
// //if everything is true, make it false
//         if (completedTodos === totalTodos) {
//             this.todos.forEach(function(todo) {
//                 todo.completed = false;
//             });
//         }
//case 2
//     //otherwise make everything true
//         else {
//             this.todos.forEach(function(todo) {
//                 todo.completed = true;
//             });
//         }


this.todos.forEach(function(todo){
    //case 1
    if(completedTodos === totalTodos){
        todo.completed = false;
    }
    //case 2
    else {
        todo.completed = true;
    }
});
    }

}

var handlers = {
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(position) {

        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    }
}

var view = {

    displayTodos: function() {
        console.log('hi');
        var todosUl = document.querySelector('UL');
        todosUl.innerHTML = '';
        // for (var i = 0; i < todoList.todos.length; i++) {
        //     var todoLi = document.createElement('LI');
        //     var todo = todoList.todos[i];

        //     var todoTextWithCompletion = '';
        //     if (todo.completed === true) {
        //         todoTextWithCompletion = '(x) ' + todo.todoText;
        //     }
        //     else {
        //         todoTextWithCompletion = '( ) ' + todo.todoText;
        //     }
        //     todoLi.id = i;
        //     todoLi.textContent = todoTextWithCompletion;
        //     todoLi.appendChild(this.createDeleteButton());
        //     todosUl.appendChild(todoLi);

        // }
    
        todoList.todos.forEach(function(todo, position){
             var todoLi = document.createElement('LI');
             var todo = todoList.todos[position];

             var todoTextWithCompletion = '';
             if (todo.completed === true) {
                 todoTextWithCompletion = '(x) ' + todo.todoText;
             }
             else {
                 todoTextWithCompletion = '( ) ' + todo.todoText;
             }
             todoLi.id = position;
             todoLi.textContent = todoTextWithCompletion;
             todoLi.appendChild(this.createDeleteButton());
             todosUl.appendChild(todoLi);
            
        }, this);

    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;

    },
    setupEventListeners: function() {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event) {
            // console.log(event.target.parentNode.id);
            //get the element that was clicked on
            var elementClicked = event.target;
            //check if the element was the delete button
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }

        });
    }

}
view.setupEventListeners();
