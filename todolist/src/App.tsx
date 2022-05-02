import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';

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
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    const [filter, setFilter] = useState<filterValueType>('all')

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    const changeFilter = (filter: filterValueType)=>{
        setFilter(filter)
    }
    //GUI:
    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                filter={filter}
                title={TodoListTitle_1}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;