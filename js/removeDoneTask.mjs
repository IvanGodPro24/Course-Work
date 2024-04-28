import {tasksList, completedTasksList} from "./elements.mjs"
import whatToRender from "./whatToRender.mjs"
import checkEmptyList from "./checkEmptyList.mjs"
import {removeDoneTask, saveToLocalStorage} from "./tasksManager.mjs"

function removeDoneTasks() {
    removeDoneTask()

    tasksList.innerHTML = ''
    completedTasksList.innerHTML = ''

    whatToRender()

    checkEmptyList()

    saveToLocalStorage()
}

export default removeDoneTasks