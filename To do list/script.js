let container = document.querySelector('.container')
var input = document.querySelector('#task')
const add = document.querySelector("#add")
const body = document.querySelector('body')
count = 0;
let tasks = [];

function createResult() {
    const div = document.createElement('div');
    div.id = 'results';
    container.appendChild(div);

}
function createButtons() {
    const buttons = document.createElement('div')
    buttons.id = "buttons"
    listContent.appendChild(buttons)
}
function createDelete() {
    const del = document.createElement('buttons')
    del.id = "delete"
    del.textContent = 'Delete'
    buttons.appendChild(del)
}
function createEdit() {
    const edit = document.createElement('buttons')
    edit.id = "edit"
    edit.textContent = 'Edit'
    buttons.appendChild(edit)
}

add.addEventListener('click', function () {
    count++;
    if (count === 1) {
        createResult();
    }
    const taskValue = input.value.trim();
    if (taskValue) { // Check if input is not empty
        tasks.push(taskValue);
        let listContent = document.createElement('div')
        listContent.id = "listContent"
        results.appendChild(listContent)
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        listContent.appendChild(x);
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = taskValue; // Set the text content to the input value
        let listContentInn = document.createElement('div')
        listContentInn.id = "listContent-inn"
        listContentInn.appendChild(listItem);
        listContent.appendChild(listContentInn) // Append the list item to the results list
        const buttons = document.createElement('div')
        buttons.id = "buttons"
        listContent.appendChild(buttons)
        const del = document.createElement('buttons')
        const edit = document.createElement('buttons')
        edit.id = "edit"
        edit.textContent = 'Edit'
        buttons.appendChild(edit)
        del.id = "delete"
        del.textContent = 'Delete'
        buttons.appendChild(del)
        const horiz = document.createElement('hr')
        results.appendChild(horiz)
        input.value = ""; // Clear the input field
    }
});
