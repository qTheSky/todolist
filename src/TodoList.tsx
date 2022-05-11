import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {filterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    filter: filterValueType
    removeTask: (taskID: string) => void
    changeFilter: (filter: filterValueType) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')

    const getTasksForRender = () => {
        let tasksForRender = props.tasks
        if (props.filter === 'active') {
            tasksForRender = props.tasks.filter(t => !t.isDone)
        }
        if (props.filter === 'completed') {
            tasksForRender = props.tasks.filter(t => t.isDone)
        }
        return tasksForRender
    }

    const tasksForRender = getTasksForRender()
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
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTask()
    const onChangeSetHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetHandler}
                    onKeyDown={onKeyDownAddTask}
                />
                <button onClick={addTask}>+</button>
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
