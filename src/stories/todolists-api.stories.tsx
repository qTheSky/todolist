import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistsApi} from '../api/todolists-api';

export default {
		title: 'API'
}

const settings = {
		withCredentials: true,
		headers: {
				'API-KEY': 'c0313221-8484-4768-9d93-144296373ae6'
		}
}

export const GetTodolists = () => {
		const [state, setState] = useState<any>(null)
		useEffect(() => {
				todolistsApi.getTodolists()
						.then(res => setState(res.data))
		}, [])
		return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
		const [state, setState] = useState<any>(null)
		useEffect(() => {
				todolistsApi.createTodolist('blabla todolist')
						.then(res => setState(res.data))
		}, [])

		return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
		const [state, setState] = useState<any>(null)
		useEffect(() => {
				const todolistId = '2fa29403-330b-4ed4-ad78-e581e48cb7db'
				todolistsApi.deleteTodolist(todolistId)
						.then(res => setState(res.data))
		}, [])

		return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
		const [state, setState] = useState<any>(null)
		useEffect(() => {
				const todolistId = '2fa29403-330b-4ed4-ad78-e581e48cb7db'
				todolistsApi.updateTodolist(todolistId, 'blablabla')
						.then(res => setState(res.data))
		}, [])

		return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
		const [state, setState] = useState<any>(null)
		useEffect(() => {
				const todolistId = 'c5213478-0c7b-4e30-ad5d-bf06209142e7'
				todolistsApi.getTasks(todolistId)
						.then(res => setState(res.data))
		}, [])
		return <div>{JSON.stringify(state)}</div>
}


export const DeleteTask = () => {
		const [state, setState] = useState<any>(null)
		const [taskId, setTaskId] = useState<string>('')
		const [todolistId, setTodolistId] = useState<string>('')

		const deleteTask = () => {
				todolistsApi.deleteTask(todolistId, taskId)
						.then(res => setState(res.data))
		}

		return <div>{JSON.stringify(state)}
				<div>
						<input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
								setTodolistId(e.currentTarget.value)
						}}/>
						<input placeholder={'taskId'} value={taskId} onChange={(e) => {
								setTaskId(e.currentTarget.value)
						}}/>
						<button onClick={deleteTask}>delete task</button>
				</div>
		</div>
}


export const AddTask = () => {
		const [state, setState] = useState<any>(null)
		useEffect(() => {
				const todolistId = 'c5213478-0c7b-4e30-ad5d-bf06209142e7'
				todolistsApi.addTask(todolistId, 'blabla')
						.then(res => setState(res.data))
		}, [])
		return <div>{JSON.stringify(state)}</div>
}