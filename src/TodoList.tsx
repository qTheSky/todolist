import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {filterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    filter: filterValueType
    removeTask: (taskID: string) => void
    changeFilter: (filter: filterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string|null>(null)

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
            const taskClasses = t.isDone ? 'is-done' : '';
            const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(t.id, e.currentTarget.checked )
            }
            return (
                <li key={t.id}>
                    <input
                        onChange={onChangeStatusHandler}
                        type="checkbox"
                        checked={t.isDone}
                    />
                    <span className={taskClasses}>{t.title}</span>
                    <button onClick={removeTask}>X</button>
                </li>
            )
        })
        : <span>List is empty</span>
    const changeFilter = (filter: filterValueType) => {
        return () => props.changeFilter(filter)
    }
    const addTask = () => {
        if (title.trim()!==''){
        props.addTask(title.trim())
        setTitle('')
        } else{
            setError('Title is required')
        }
    }
    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        e.key === 'Enter' && addTask()
    }
    const onChangeSetHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const allBtnClasses = props.filter === 'all' ? 'active-filter' : '';
    const activeBtnClasses = props.filter === 'active' ? 'active-filter' : '';
    const completedBtnClasses = props.filter === 'completed' ? 'active-filter' : '';

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetHandler}
                    onKeyDown={onKeyDownAddTask}
                    className={error?'error':''}
                />
                <button onClick={addTask}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {tasksJSXElements}
            </ul>
            <div>
                <button
                    className={allBtnClasses}
                    onClick={changeFilter('all')}>All
                </button>
                <button
                    className={activeBtnClasses}
                    onClick={changeFilter('active')}>Active
                </button>
                <button
                    className={completedBtnClasses}
                    onClick={changeFilter('completed')}>Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;