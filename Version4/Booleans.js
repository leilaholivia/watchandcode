var todoList = {
    todos: [],
    displayTodos: function(){
        console.log('My Todos:', this.todos);
    },
    addTodo: function(todo){
        this.todos.push({
            todoText: todo,
            completed:false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todoText.splice(position, 1);
        this.displayTodos();
    },
    
    toggleCompleted: function(position){
        var todo = this.todo[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}
    
    todoList.addTodo('First Try');
    todoList.addTodo('Second');
    todoList.toggleCompleted(0);
    todoList.deleteTodo(1);
    