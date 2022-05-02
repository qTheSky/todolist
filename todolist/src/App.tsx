import React from 'react';
import './App.css';
import TodoList from './TodoList';


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL:
    const TodoListTitle_1 = 'What to learn'
    const tasks: Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]
    //GUI:
    return (
        <div className="App">
            <TodoList
                title={TodoListTitle_1}
                tasks={tasks}
            />
        </div>
    );
}

export default App;