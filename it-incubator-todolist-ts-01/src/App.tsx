import React from 'react';
import './App.css';
import TodoList from "./TodoList";




export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const TodoListTitle_1 = "What to learn"
    const TodoListTitle_2 = "What to buy"
    const TodoListTitle_3 = "What to read"
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    return (
        <div className="App">
            <TodoList
                title={TodoListTitle_1}
                tasks={tasks}
            />
            {/*<TodoList title={TodoListTitle_2}/>*/}
            {/*<TodoList title={TodoListTitle_3}/>*/}
        </div>
    );
}

export default App;