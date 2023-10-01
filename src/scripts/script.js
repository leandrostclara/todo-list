const taskInput = document.querySelector('.task-input')
const addTaskBtn = document.querySelector('.add-task-btn')
const taskList = document.querySelector('.task-list')

let taskListArray = []

function addNewTask() {
    
    if (taskInput.value=="") {
        alert ('Campo não pode ficar vazio !')
    } else {

    taskListArray.push({
        task: taskInput.value,
        complete: false
    })

    showTasks()

    taskInput.value = ''
    }

}

function showTasks() {

    let newTask = ''
    
    taskListArray.forEach((item, index) => {

        newTask = newTask +

        `
        <li class="task ${item.complete && "complete"}">
            <img src="./src/img/checked.png" alt="concluir tarefa" onclick="completeTask(${index})">
            <p>${item.task}</p>
            <img src="./src/img/trash.png" alt="excluir tarefa" onclick="deleteTask(${index})">
        </li>
        `

    })

    taskList.innerHTML = newTask

    localStorage.setItem('list', JSON.stringify(taskListArray))

}

function completeTask(index) {

    taskListArray[index].complete = !taskListArray[index].complete 

    showTasks()

}

function deleteTask(index) {

    taskListArray.splice(index, 1)

    showTasks()
}

function reloadTasks() {

    const tasksOfLocalStorage = localStorage.getItem('list')

    if (tasksOfLocalStorage) {

    taskListArray = JSON.parse(tasksOfLocalStorage)

    }

    showTasks()

}

reloadTasks()

addTaskBtn.addEventListener('click', addNewTask)