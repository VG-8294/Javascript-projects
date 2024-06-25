let container = document.querySelector('.container')
var input = document.querySelector('#task')
const add = document.querySelector("#add")
const body = document.querySelector('body')
const html = document.querySelector('html')
count = 0;
let tasks = [];

function createResult() {
    const div = document.createElement('div');
    div.id = 'results';
    container.appendChild(div);

}

//Adding the functionality of the add task button
add.addEventListener('click', function () {
    count++;
    if (count === 1) {
        createResult(); //Creating the result only one time at the start
    }
    const taskValue = input.value.trim();
    if (taskValue) { // checks whether the input is empty or not 
        tasks.push(taskValue);

        //Creating a div indside the result section
        let listContent = document.createElement('div')
        listContent.id = "listContent"
        results.appendChild(listContent)

        //creating a list item for adding task into it
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;
        
        //Creating one more div inside listContent for list items
        let listContentInn = document.createElement('div')
        listContentInn.id = "listContent-inn"
        listContent.appendChild(listContentInn)
        //Creating a checkbox
        var x = document.createElement("Input");
        x.setAttribute("type", "checkbox");
        listContentInn.appendChild(x);
        x.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        })

        //Now adding the list items 
        listContentInn.appendChild(listItem);

        //Creating div for buttons
        const buttons = document.createElement('div')
        buttons.id = "buttons"
        listContent.appendChild(buttons)

        //Creating buttons for edit and delete
        //Edit
        const edit = document.createElement('button')
        edit.id = "edit"
        edit.textContent = 'Edit'
        buttons.appendChild(edit)
        //Delete
        const del = document.createElement('button')
        del.id = "delete"
        del.textContent = 'Delete'
        buttons.appendChild(del)
        //Creating a horizontal line after each task
        const horiz = document.createElement('hr')
        results.appendChild(horiz)

        //Removing the value of input field after addition of task
        input.value = ""; 
        //Functionality of Delete and Edit buttons
        //Delete
        del.addEventListener('click', function () {
            listContent.remove();
            horiz.remove()
        })
        //Edit
        edit.addEventListener('click', function () {
            let editInput = document.createElement('input');
            editInput.id = "InputEdit"
            editInput.value = listItem.textContent;

            listContentInn.replaceChild(editInput, listItem);

            editInput.focus();

            function saveChanges() {
                listItem.textContent = editInput.value;
                listContentInn.replaceChild(listItem, editInput);
            }

            editInput.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) { // Enter key pressed
                    saveChanges();
                }
            });

            editInput.addEventListener('blur', function () {
                saveChanges();
            });
        });


    }
});
