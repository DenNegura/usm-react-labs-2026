import {useState} from "react";
import Button from "../Button";
import styles from "./TaskForm.module.css";

export default function TaskForm({onSubmit}) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        onSubmit?.({
            id: Date.now(),
            text: text.trim(),
        });

        setText("");
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="New task..."
                className={styles.input}
            />

            <Button type="submit">add</Button>
        </form>
    );
}
