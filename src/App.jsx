import './App.css'
import TaskPage from "./components/TaskPage";
import {useEffect, useReducer} from "react";

function taskReducer(state, action) {
    switch (action.type) {
        case "create":
            return action.tasks;
        case "add":
            return [action.task, ...state]
        case "update":
            return state.map(task => {
                if (task.id === action.id) {
                    return {...action.task, id: action.id}
                } else {
                    return task;
                }
            })
        case "delete":
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
}

function App() {

    const [tasks, dispatch] = useReducer(taskReducer, null);

    useEffect(() => {

        fetch(`https://dummyjson.com/todos`)
            .then((res) => res.json())
            .then(data => dispatch({
                type: "create",
                tasks: data.todos.map(todo => ({
                    id: todo.id,
                    text: todo.todo,
                    completed: todo.completed
                }))
            }))
    }, []);

    if (!tasks) {
        return <div>Loading...</div>;
    }
    return <TaskPage tasks={tasks} dispatch={dispatch} />;
}

export default App
