import React from 'react'
import {action} from '@storybook/addon-actions'
import {Task} from './Task';
import {TaskPriorities, TaskStatuses} from './api/todolists-api';

export default {
		title: 'Task Component',
		component: Task
}

const changeTaskStatusCallback = action('Status changed')
const changeTaskTitleCallback = action('Title changed')
const removeTaskCallback = action('Task removed')

export const TaskFormBaseExample = () => {
		return <>
				<Task changeTaskStatus={changeTaskStatusCallback}
				      changeTaskTitle={changeTaskTitleCallback}
				      removeTask={removeTaskCallback}
				      task={{
						      id: '1', status: TaskStatuses.Completed, title: 'CSS', todoListId: 'todolistId1',
						      description: '',
						      startDate: '',
						      deadline: '',
						      addedDate: '',
						      order: 0,
						      priority: TaskPriorities.Low,
				      }}
				      todolistId={'todolistId1'}
				/>
				<Task changeTaskStatus={changeTaskStatusCallback}
				      changeTaskTitle={changeTaskTitleCallback}
				      removeTask={removeTaskCallback}
				      task={{
						      id: '2', status: TaskStatuses.New, title: 'JS', todoListId: 'todolistId1',
						      description: '',
						      startDate: '',
						      deadline: '',
						      addedDate: '',
						      order: 0,
						      priority: TaskPriorities.Low,
				      }}
				      todolistId={'todolistId2'}
				/>
		</>
}