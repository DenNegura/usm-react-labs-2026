import {useState} from "react";
import Button from "../Button";
import styles from "./TaskCard.module.css";

export default function TaskCard({task, onUpdate, onDelete}) {

    const [isEditMode, setIsEditMode] = useState(false);

    const [text, setText] = useState(task ? task.text : '');

    const [isCompleted, setIsCompleted] = useState(task ? task.completed : false);

    const handleSaveOrEdit = () => {
        if (isEditMode) {
            onUpdate && onUpdate({...task, completed: isCompleted, text});
        }
        setIsEditMode((flag) => !flag);
    }

    return (
        <div className={styles.taskCardContainer}>
            <input type={'checkbox'}
                   checked={isCompleted}
                   onChange={() => setIsCompleted(!isCompleted)}/>
            {isEditMode ?
                <input type="text"
                       value={text}
                       onChange={e => setText(e.target.value)}
                       placeholder={'type the text ...'}
                       className={styles.textInput}/> :
                <label className={`${styles.textLabel} ${isCompleted ? styles.completed : ''}`}>{text}</label>
            }
            <Button onClick={handleSaveOrEdit}>{isEditMode ? 'save' : 'edit'}</Button>
            <Button onDelete={() => onDelete?.(task?.id)} disabled={isEditMode}>delete</Button>
        </div>
    );
}