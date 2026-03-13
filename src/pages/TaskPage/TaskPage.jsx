import {useMemo, useReducer} from "react";
import styles from "./TaskPage.module.css";
import TaskList from "../../components/TaskList/index.js";
import TaskForm from "../../components/TaskForm/index.js";
import TaskFilter from "../../components/TaskFilter/index.js";
import {TaskProvider, useTasks} from "../../provider/TaskProvider.jsx";


function filterTasks(tasks, filters) {
    return tasks.filter((task) => {

        let passStatus = filters.status === "all" ||
            (task.completed && filters.status === 'completed') ||
            (!task.completed && filters.status === 'uncompleted');

        const includes = task.text.toLowerCase()
            .includes(filters.text.trim().toLowerCase())
        return includes && passStatus;
    });
}

function filtersReducer(state, action) {
    switch (action.type) {
        case "changeText":
            if (action.text === state.text) {
                return state;
            }
            return {...state, text: action.text};
        case "changeStatus":
            if (action.status === state.status) {
                return state;
            }
            return {...state, status: action.status};
        default:
            return state;
    }
}

export default function TaskPage() {

    const [tasks, dispatch] = useTasks();

    const [filters, changeFilters] = useReducer(filtersReducer, {text: "", status: "all"});

    const filteredTasks = useMemo(() => filterTasks(tasks, filters), [tasks, filters]);

    return (
            <div className={styles.taskPageContainer}>
                <TaskFilter filters={filters} dispatch={changeFilters}/>
                <TaskForm onSubmit={(task) => dispatch({type: 'add', task})}/>
                <TaskList tasks={filteredTasks}
                          onUpdateTask={(id, task) => dispatch({type: "update", id, task})}
                          onDeleteTask={(id) => dispatch({type: "delete", id})}/>
            </div>
    )
}