import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './state/tasks-reducer';
import {
		AddTodolistAC,
		ChangeTodolistFilterAC,
		ChangeTodolistTitleAC,
		RemoveTodolistAC,
		todolistsReducer
} from './state/todolists-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistType = {
		id: string
		title: string
		filter: FilterValuesType
}

export type TasksStateType = {
		[key: string]: Array<TaskType>
}


function App() {

		const dispatch = useDispatch()
		const todolists = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists)


		function addTodolist(title: string) {
				dispatch(AddTodolistAC(title))
		}

		return (
				<div className="App">
						<AppBar position="static">
								<Toolbar>
										<IconButton edge="start" color="inherit" aria-label="menu">
												<Menu/>
										</IconButton>
										<Typography variant="h6">
												News
										</Typography>
										<Button color="inherit">Login</Button>
								</Toolbar>
						</AppBar>
						<Container fixed>
								<Grid container style={{padding: '20px'}}>
										<AddItemForm addItem={addTodolist}/>
								</Grid>
								<Grid container spacing={3}>
										{
												todolists.map(tl => {
														return <Grid item>
																<Paper style={{padding: '10px'}}>
																		<Todolist
																				key={tl.id}
																				todolist={tl}
																		/>
																</Paper>
														</Grid>
												})
										}
								</Grid>
						</Container>
				</div>
		);
}

export default App;