import {createContext, useContext, useEffect, useReducer} from "react";

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

const TaskContext = createContext(null);

const TaskProvider = ({children}) => {

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

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            {tasks ? children : <div>Loading ...</div>}
        </TaskContext.Provider>
    )
}

function useTasks() {
    const ctx = useContext(TaskContext);

    if (!ctx) {
        throw new Error('useTasks must be used within the TaskProvider');
    }

    return [ctx.tasks, ctx.dispatch, ctx.addTask];
}

export {TaskProvider, useTasks};