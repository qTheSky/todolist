import axios from 'axios';


const instance = axios.create({
		baseURL: 'https://social-network.samuraijs.com/api/1.1/',
		withCredentials: true,
		headers: {
				'API-KEY': 'c0313221-8484-4768-9d93-144296373ae6'
		},
})

export type TodolistType = {
		id: string
		title: string
		addedDate: string
		order: number
}

type ResponseType<D = {}> = {
		resultCode: number
		messages: string[]
		data: D
}

export enum TaskStatuses {
		New,
		InProgress,
		Completed,
		Draft,
}

export enum TaskPriorities {
		Low,
		Middle,
		Hi,
		Urgently,
		Later,
}

export type TaskType = {
		description: string
		title: string
		status: TaskStatuses
		priority: TaskPriorities
		startDate: string
		deadline: string
		id: string
		todoListId: string
		order: number
		addedDate: string
}

export type UpdateTaskType = {
		title: string
		description: string
		completed: boolean
		status: number
		priority: number
		startDate: string
		deadLine: string
}

type GetTasksResponse = {
		error: string | null
		totalCount: number
		items: TaskType[]
}


export const todolistsApi = {
		getTodolists() {
				return instance.get<TodolistType[]>('todo-lists')
		},
		createTodolist(title: string) {
				return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title})
		},
		deleteTodolist(id: string) {
				return instance.delete<ResponseType>(`todo-lists/${id}`)
		},
		updateTodolist(id: string, title: string) {
				return instance.put<ResponseType>(`todo-lists/${id}`, {title})
		},
		getTasks(todolistId: string) {
				return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
		},
		deleteTask(todolistId: string, taskId: string) {
				return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
		},
		addTask(todolistId: string, title: string) {
				return instance.post(`todo-lists/${todolistId}/tasks`, {title})
		},
}
