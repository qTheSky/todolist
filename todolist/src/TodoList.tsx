import React from 'react';
import {filterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    filter: filterValueType
    removeTask: (taskID: number) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    let tasksForRender = props.tasks
    if (props.filter === 'active') {
        tasksForRender = props.tasks.filter(t => t.isDone === false)
    }
    if (props.filter === 'completed') {
        tasksForRender = props.tasks.filter(t => t.isDone === true)
    }

    const tasksJSXElements = tasksForRender.map(t => {
        const removeTask = () => props.removeTask(t.id)
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={removeTask}>X</button>
            </li>
        )
    })
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;