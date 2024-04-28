import {tasksList, completedTasksList} from "./elements.mjs"
import whatToRender from "./whatToRender.mjs"
import {getTasks, saveToLocalStorage} from "./tasksManager.mjs"

function starredTask(event) {
    if (event.target.dataset.action !== 'starred') return

    const taskId = event.target.closest('li').id
    const taskIndex = getTasks().findIndex(task => task.id === Number(taskId))

    getTasks()[taskIndex].starred = !getTasks()[taskIndex].starred

    saveToLocalStorage()

    tasksList.innerHTML = ''
    completedTasksList.innerHTML = ''

    whatToRender()
}

export default starredTask