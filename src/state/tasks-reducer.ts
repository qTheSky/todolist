import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from './todolists-reducer';

export type RemoveTaskActionType = {
		type: 'REMOVE-TASK'
		todolistID: string
		taskID: string
}
export type AddTaskActionType = {
		type: 'ADD-TASK'
		todolistID: string
		title: string
}
export type ChangeTaskStatusActionType = {
		type: 'CHANGE-TASK-STATUS'
		todolistID: string
		taskID: string
		isDone: boolean
}
export type ChangeTaskTitleActionType = {
		type: 'CHANGE-TASK-TITLE'
		todolistID: string
		taskID: string
		title: string
}


type ActionsType =
		RemoveTaskActionType
		| AddTaskActionType
		| ChangeTaskStatusActionType
		| ChangeTaskTitleActionType
		| AddTodolistActionType
		| RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
		switch (action.type) {
				case 'REMOVE-TASK': {
						return {...state, [action.todolistID]: state[action.todolistID].filter(t => t.id !== action.taskID)}
				}
				case 'ADD-TASK': {
						const newTask = {id: v1(), title: action.title, isDone: false}
						return {...state, [action.todolistID]: [newTask, ...state[action.todolistID]]}
				}
				case 'CHANGE-TASK-STATUS': {
						return {
								...state, [action.todolistID]: state[action.todolistID]
										.map(t => t.id === action.taskID
												? {...t, isDone: action.isDone}
												: t)
						}
				}
				case 'CHANGE-TASK-TITLE': {
						return {
								...state, [action.todolistID]: state[action.todolistID]
										.map(t => t.id === action.taskID
												? {...t, title: action.title}
												: t)
						}
				}
				case 'ADD-TODOLIST': {
						return {...state, [action.todolistID]: []}
				}
				case 'REMOVE-TODOLIST': {
						const stateCopy = {...state}
						delete stateCopy[action.id]
						return stateCopy
				}
				default:
						throw new Error('I don\'t understand this type')
		}
}

export const removeTaskAC = (todolistID: string, taskID: string): RemoveTaskActionType => {
		return {type: 'REMOVE-TASK', todolistID, taskID}
}
export const addTaskAC = (todolistID: string, title: string): AddTaskActionType => {
		return {type: 'ADD-TASK', todolistID, title}
}
export const changeTaskStatusAC = (todolistID: string, taskID: string, isDone: boolean): ChangeTaskStatusActionType => {
		return {type: 'CHANGE-TASK-STATUS', todolistID, taskID, isDone}
}
export const changeTaskTitleAC = (todolistID: string, taskID: string, title: string): ChangeTaskTitleActionType => {
		return {type: 'CHANGE-TASK-TITLE', todolistID, taskID, title}
}

