import {taskInput} from "../view/elements.mjs"
import renderTask from "../view/renderTask.mjs"
import checkEmptyList from "../view/checkEmptyList.mjs"
import {addTasks, saveToLocalStorage} from "../model/tasksManager.mjs"

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