// const todo = ['aa', 'bbb', 'ccc'];
let todos = [];
const key = 'todo';

window.onload = () => {
	const savedTodo = getTodos();
	if (savedTodo && savedTodo.length > 0) {
		todos = savedTodo;
		renderList();
	}
}

function newItem(event) {
	let value = prompt("Please enter your new todo");
	if (!value) { return; }
	todos.unshift(value);
	saveTodos();
	renderList();
}

function removeItem(event) {
	const value = event.target.textContent;
	const confirm = window.confirm(`Do you want to remove "${value}"`);
	if (confirm) {
		const index = todos.findIndex(el => el === value);
		todos.splice(index, 1);
		saveTodos();
		renderList();
	}
}

function renderList() {
	const idName = 'todo';
	const elments = [];
	const list = document.getElementById('ft_list');
	todos.forEach((el, i) => {
		const item = createListElement(idName + i, el);
		elments.push(item);
	});
	list.replaceChildren(...elments);
}

function createListElement(id, value) {
	li = document.createElement('li');
	li.id = id;
	li.className = 'list-item';
	li.addEventListener('click', (event) => removeItem(event));
	li.textContent = value;
	return li;
}

function saveTodos() {
	const json = JSON.stringify(todos);
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