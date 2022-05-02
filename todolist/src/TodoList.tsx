import React from 'react';
import {filterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    filter: filterValueType
    removeTask: (taskID: number) => void
    changeFilter: (filter: filterValueType) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    let tasksForRender = props.tasks
    if (props.filter === 'active') {
        tasksForRender = props.tasks.filter(t => !t.isDone)
    }
    if (props.filter === 'completed') {
        tasksForRender = props.tasks.filter(t => t.isDone)
    }

    const tasksJSXElements = tasksForRender.length
        ? tasksForRender.map(t => {
            const removeTask = () => props.removeTask(t.id)
            return (
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={removeTask}>X</button>
                </li>
            )
        })
        : <span>List is empty</span>
    const changeFilter = (filter: filterValueType) => {
        return () => props.changeFilter(filter)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksJSXElements}
            </ul>
            <div>
                <button onClick={changeFilter('all')}>All</button>
                <button onClick={changeFilter('active')}>Active</button>
                <button onClick={changeFilter('completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;