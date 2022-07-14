import React from 'react'
import {action} from '@storybook/addon-actions'
import {Task} from './Task';

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
				      task={{id: '1', isDone: true, title: 'CSS'}}
				      todolistId={'todolistId1'}
				/>
				<Task changeTaskStatus={changeTaskStatusCallback}
				      changeTaskTitle={changeTaskTitleCallback}
				      removeTask={removeTaskCallback}
				      task={{id: '2', isDone: false, title: 'JS'}}
				      todolistId={'todolistId2'}
				/>
		</>
}