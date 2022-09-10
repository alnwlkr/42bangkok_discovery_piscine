
let todo_list = [];
const key = 'todo';

window.onload = () = {
    const savedTodo = getTodos();
    //If saved_list not empty so initialize saved_list value to todo_list
    if (saved_list && saved_list.length > 0) {
        todo_list = saved_list;
        showList();
    }
}

function newItem(event) {
    let value = prompt("Enter new to do list");
    //Check If input is empty
    if (!value) { return; }
    //add new value to the start of the array
    todo_list.unshift(value);
    save_todo();
    showList();
}

function delItem(event) {
    const value = event.target.textContext;
    const confirm = window.confirm(`Are you sure to remove "${value}"`);
    if (confirm) {
        const index = todo_list.findIndex(el => el === value);
        todo_list.splice(index, 1);
        save_todo();
        showList();
    }
}

function showList() {
    const idName = 'todo';
    const temp = [];
    const list = document.getElementById('ft_list');
    todo_list.forEach((el, i) => {
        const item = createListElement(idName + i, el);
        temp.push(item);
    });
    list.replaceChildren(...temp);
}

function createListElement(id, value) {
    li = document.createElement('li');
    li.id = id;
    li.className = 'list-item';
    li.addEventListener('click', (event) => removeItem(event));
    li.textContent = value;
    return li;
}

function save_todo() {
    const json = JSON.stringify(todo_list);
    document.cookie = `${key}=${json};`
}

function getTodos() {
    const cookies = document.cookie.split(';');
    if (!cookies) {
        return;
    }
    const data = cookies.find(c => c.split('=')[0] == key);
    return data ? JSON.parse(data.split('=')[1]) : undefined;
}