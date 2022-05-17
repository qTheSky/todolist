import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';
import {v1} from 'uuid';

export type filterValueType = 'all' | 'active' | 'completed'

function App() {

    const TodoListTitle_1: string = 'What to learn'
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/TS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ])

    const [filter, setFilter] = useState<filterValueType>('all')

    const removeTask = (taskID: string) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(), title: title, isDone: false
        }
        setTasks([newTask, ...tasks])
    }
    const changeFilter = (filter: filterValueType) => {
        setFilter(filter)
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskID ? {...t, isDone} : t))
    }

    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                filter={filter}
                title={TodoListTitle_1}
                changeTaskStatus={changeTaskStatus}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;