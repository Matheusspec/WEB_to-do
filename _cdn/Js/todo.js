var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var ButtonElement = document.querySelector('button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function rendertodos () {
    listElement.innerHTML = '';

    for (const todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'DeleteTodo(' + pos + ')')
        
        var linkText = document.createTextNode('Delete');
        
        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}


function addTodos () {
    let todoText = inputElement.value;
    
if(  inputElement.value != 0 )
    todos.push(todoText);
else
    alert('Please fill the text-box bellow!')

    inputElement.value = '';
    
    rendertodos();
    saveStorage();
}   

rendertodos();

ButtonElement.onclick = addTodos;

function DeleteTodo( pos ) {
    todos.splice( pos , 1 );

    rendertodos();
    saveStorage();
}

function saveStorage () {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}