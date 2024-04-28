import {tasksList, completedTasksList} from "../view/elements.mjs"
import whatToRender from "./whatToRender.mjs"
import checkEmptyList from "../view/checkEmptyList.mjs"
import {removeDoneTask, saveToLocalStorage} from "../model/tasksManager.mjs"

function removeDoneTasks() {
    removeDoneTask()

    tasksList.innerHTML = ''
    completedTasksList.innerHTML = ''

    whatToRender()

    checkEmptyList()

    saveToLocalStorage()
}

export default removeDoneTasks