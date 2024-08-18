let todos = [];
let count = 0;

function addTodo() {
    todos.push({
        id: count,
        title: document.querySelector('input').value
    })
    count++;
    render();
}

function render() {
    document.querySelector('#todos').innerHTML = '';
    todos.forEach((todo) => {
        const divEl = createTodoComponent(todo);
        document.querySelector('#todos').appendChild(divEl);
        document.querySelector("input").value = "";
    })
}

function createTodoComponent(todo) {
        const spanEl = document.createElement('span');
        const buttonEl = document.createElement('button');
        spanEl.innerHTML = todo.title;
        buttonEl.innerHTML = 'Delete';
        const deleteFunc = "deleteTodo(" + todo.id + ")";
        buttonEl.setAttribute('onclick', deleteFunc);

        const divEl = document.createElement('div');
        divEl.appendChild(spanEl);
        divEl.appendChild(buttonEl);
        return divEl;
}
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function editToDo() {
    const elem = document.getElementById(id);
}
