var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
    
}

//myComputer.operatingSystem;
//myComputer.screenSize;
//myComputer.purchaseYear;

var Leilah = {
    name: 'Leilah',
    sayName: function(){
        console.log(this.name);
    }
};

Leilah.sayName();

var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos: function(){
        console.log('My Todos:', this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
 
 todoList.displayTodos();
 todoList.deleteTodo(1);