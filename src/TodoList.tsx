import React, {ChangeEvent} from 'react';
import {FilterValuesType, TodolistType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {AppRootStateType} from './state/store';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from './state/tasks-reducer';
import {ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC} from './state/todolists-reducer';
import {useDispatch, useSelector} from 'react-redux';

export type TaskType = {
		id: string
		title: string
		isDone: boolean
}

type PropsType = {
		todolist: TodolistType
}

export function Todolist({todolist}: PropsType) {
		const dispatch = useDispatch()
		const {id, title, filter} = {...todolist};
		let tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[id])


		const addTask = (title: string) => {
				dispatch(addTaskAC(id, title))
		}

		const removeTodolist = () => {
				dispatch(RemoveTodolistAC(id))
		}

		const changeTodolistTitle = (title: string) => {
				dispatch(ChangeTodolistTitleAC(id, title))
		}

		const onAllClickHandler = () => dispatch(ChangeTodolistFilterAC(id, 'all'))
		const onActiveClickHandler = () => dispatch(ChangeTodolistFilterAC(id, 'active'))
		const onCompletedClickHandler = () => dispatch(ChangeTodolistFilterAC(id, 'completed'))


		if (filter === 'active') {
				tasks = tasks.filter(t => !t.isDone);
		}
		if (filter === 'completed') {
				tasks = tasks.filter(t => t.isDone);
		}

		return <div>
				<h3><EditableSpan value={title} onChange={changeTodolistTitle}/>
						<IconButton onClick={removeTodolist}>
								<Delete/>
						</IconButton>
				</h3>
				<AddItemForm addItem={addTask}/>
				<div>
						{
								tasks.map(t => {
										const onClickHandler = () => dispatch(removeTaskAC(id, t.id))
										const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
												dispatch(changeTaskStatusAC(id, t.id, e.currentTarget.checked))
										}
										const onTitleChangeHandler = (newValue: string) => {
												dispatch(changeTaskTitleAC(id, t.id, newValue))
										}


										return <div key={t.id} className={t.isDone ? 'is-done' : ''}>
												<Checkbox
														checked={t.isDone}
														color="primary"
														onChange={onChangeHandler}
												/>

												<EditableSpan value={t.title} onChange={onTitleChangeHandler}/>
												<IconButton onClick={onClickHandler}>
														<Delete/>
												</IconButton>
										</div>
								})
						}
				</div>
				<div>
						<Button variant={filter === 'all' ? 'outlined' : 'text'}
						        onClick={onAllClickHandler}
						        color={'default'}
						>All
						</Button>
						<Button variant={filter === 'active' ? 'outlined' : 'text'}
						        onClick={onActiveClickHandler}
						        color={'primary'}>Active
						</Button>
						<Button variant={filter === 'completed' ? 'outlined' : 'text'}
						        onClick={onCompletedClickHandler}
						        color={'secondary'}>Completed
						</Button>
				</div>
		</div>
}


