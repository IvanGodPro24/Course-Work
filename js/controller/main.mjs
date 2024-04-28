import { initialize as tasksControllerInitialize } from "./tasksController.mjs"
import popoverTriggerList from "../view/popoverTriggerList.mjs"
import checkEmptyList from "../view/checkEmptyList.mjs"
import withoutSpaces from "../view/withoutSpaces.mjs"
import {loadFromLocalStorage} from "../model/tasksManager.mjs"

loadFromLocalStorage()

tasksControllerInitialize()

popoverTriggerList()

checkEmptyList()

withoutSpaces()

