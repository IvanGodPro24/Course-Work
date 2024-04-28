import {taskInput} from "./elements.mjs"
import renderTask from "./renderTask.mjs"
import checkEmptyList from "./checkEmptyList.mjs"
import {addTasks, saveToLocalStorage} from "./tasksManager.mjs"

function addTask(event) {
    event.preventDefault()

    const taskText = taskInput.value

    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false,
        starred: false
    }

    addTasks(newTask)

    renderTask(newTask)

    taskInput.value = ''

    taskInput.focus()

    checkEmptyList()

    saveToLocalStorage()
}

export default addTask