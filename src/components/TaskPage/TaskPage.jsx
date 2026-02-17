import {useState} from "react";
import {TASKS} from "../../data/tasks.js";
import styles from "./TaskPage.module.css";
import TaskList from "../TaskList";
import TaskForm from "../TaskForm";

export default function TaskPage() {
    const [tasks, setTask] = useState(TASKS);


    const handleSubmit = (task) => {
        // todo
    }

    const handleUpdate = (id, task) => {
        // todo
    }

    const handleDelete = (id) => {
        // todo
    }

    return (
        <div className={styles.taskPageContainer}>
            <TaskForm onSubmit={handleSubmit} />
            <TaskList tasks={tasks}
                      onUpdateTask={handleUpdate}
                      onDeleteTask={handleDelete}/>
        </div>
    )
}