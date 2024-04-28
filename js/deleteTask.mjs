import checkEmptyList from "./checkEmptyList.mjs"
import {removeTask, saveToLocalStorage} from "./tasksManager.mjs"

function deleteTask(event) {
    if (event.target.dataset.action !== 'delete') return

    const li = event.target.closest('li')

    const id = Number(li.id)

    removeTask(id)

    li.remove()

    checkEmptyList()

    saveToLocalStorage()
}

export default deleteTask