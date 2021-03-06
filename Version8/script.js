var todoList = {
    todos: [],
    displayTodos: function() {

        //if there are no todos
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        }
        else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
                //check if .completed == false;
                if (this.todos[i].completed == false){
                    console.log('( )', this.todos[i].todoText);
                }
                else{
                    console.log('(x)', this.todos[i].todoText);
                }
                        //print () item1
                //check if completed == true;
                        //print (x) item2
                
            }

        }
        //console.log('Your Ttdo list is empty!');
        //else  print todos as normal

    },
    addTodo: function(todo) {
        this.todos.push({
            todoText: todo,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todoText.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
        //if everything is true, make it false
        if (completedTodos === totalTodos){
            for( var i = 0; i< totalTodos; i++){
                this.todos[i].completed = false;
                }
            }
        //if everything is false
            else{
                for( var i = 0; i< totalTodos; i++){
                this.todos[i].completed = true;
                }
                
            }
            this.displayTodos();
        }
        
    }
    
    // var displayTodosButton = document.getElementById('displayTodosButton');
    // displayTodosButton.addEventListener('click', function(){
    //     todoList.displayTodos();
    // });
    // var toggleAllButton = document.getElementById('toggleAllButton');
    // toggleAllButton.addEventListener('click', function(){
    //     todoList.toggleAll();
    // });
    
    var handlers = {
        displayTodos: function (){
             todoList.displayTodos();
        },
        toggleAll: function(){
             todoList.toggleAll();
        }, 
        addTodo: function(){
            var addTodoTextInput = document.getElementById("addTodoTextInput");
            todoList.addTodo(addTodoTextInput.value);
            addTodoTextInput.value = '';
        },
        changeTodo: function(){
            var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
            var changeTodoTextInput = document.getElementById("changeTodoTextInput");
            todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
            changeTodoPositionInput.value ='';
            changeTodoTextInput.value = '';
        },
        deleteTodo: function(){
            var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
            todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        },
        toggleCompleted: function(){
            var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
            todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
            toggleCompletedPositionInput.value='';
        }
    }
    
    
    
    