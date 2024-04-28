import {getTasks, saveToLocalStorage} from "../model/tasksManager.mjs"

function forEdit() {
    const newValue = this.textContent
    const taskId = this.parentElement.id
    const taskIndex = getTasks().findIndex(task => task.id === Number(taskId))
    getTasks()[taskIndex].text = newValue
    saveToLocalStorage()
}

export default forEdit