import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';
import {v1} from 'uuid';

// CRUD -> GUI || CLI
// create
// read
// update
// delete

export type filterValueType = 'all' | 'active' | 'completed'


function App() {
    //BLL:
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
        setTasks([newTask,...tasks])
    }
    const changeFilter = (filter: filterValueType) => {
        setFilter(filter)
    }
    //GUI:
    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                filter={filter}
                title={TodoListTitle_1}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;