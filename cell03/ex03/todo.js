let arrtodos = [];
const cookie_key = 'todo';

window.onload = () => {
    const localTodo = getTodoLists(); // get localTodo from cookie
    //If localTodo is not empy so set arrtodo value to localTodo
	if (localTodo && localTodo.length > 0) {
		arrtodos = localTodo;
		showList();
	}
}

function newItem(event) {
    //prompt user to input new to do list
	let value = prompt("Enter new to do list");
    if (!value) { return; }
    //add new value to the start of the array
	arrtodos.unshift(value);
	saveTodos();
	showList();
}

function removeItem(event) {
    //set value to the content of the element that user click
    const value = event.target.textContent;
	const confirm = window.confirm(`Do you want to remove "${value}"`);
	if (confirm) {
        //find index of arrtodos that match value with value var
        const index = arrtodos.findIndex(el => el === value);
        //delete that index --- syntax of splice this posisition and how many item
		arrtodos.splice(index, 1);
		saveTodos();
		showList();
	}
}

function showList() {
	const idName = 'todo';
	const showListArr = [];
	const list = document.getElementById('ft_list');
	arrtodos.forEach((el, i) => {
		//create new list element
		const item = createListElement(idName + i, el);
		//add item at the first element of showListArr
		showListArr.push(item);
	});
	//update list
	list.replaceChildren(...showListArr);
}

//argument from showList function
function createListElement(id, value) {
	//create element with tag li
	li = document.createElement('li');
	//create id="idName + i" Ex.todo0 todo1
	li.id = id;
	//create class named 'list-item'
	li.className = 'list-item';
	//create click detection if clicked will run removeItem with event argument
	li.addEventListener('click', (event) => removeItem(event));
	//put value text in the tag
	li.textContent = value;
	return li;
}

function saveTodos() {
	//This function save data to cookie
	//we need to typecast the data b4 write to cookie
	const json = JSON.stringify(arrtodos);
	console.log(json)
	//save json to cookie
	document.cookie = `${cookie_key}=${json};`
}

function getTodoLists() {
	//cookie store data and seperate by ; so we access data by using ; as seperator
	//so cookies will be array of cookie data
	const cookies = document.cookie.split(';');
	//if cookie empty do return
	if (!cookies) {
		return;
	}
	//check cookie data is correct and keep it in the data var
	const data = cookies.find(c => c.split('=')[0] == cookie_key);
	//return undefined if data not available
	//return second field of data split by '=' if data available
	return data ? JSON.parse(data.split('=')[1]) : undefined;
}