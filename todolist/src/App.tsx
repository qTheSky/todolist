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
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    const [filter, setFilter] = useState<filterValueType>('all')
    const TodoListTitle_1: string = 'What to learn'

    const removeTask = (taskID: number) => { //2
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    //GUI:
    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                filter={filter}
                title={TodoListTitle_1}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;