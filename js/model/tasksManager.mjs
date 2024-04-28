let tasks = []

export function getTasks() {
    return tasks
}

export function addTasks(task) {
    tasks.push(task)
}

export function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id)
}

export function removeDoneTask() {
    tasks = tasks.filter(task => !task.done)
}

export function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function loadFromLocalStorage() {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks'))

    if (localStorageTasks) {
        tasks = localStorageTasks
    }
}