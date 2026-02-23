import styles from "./TaskFilter.module.css";

export default function TaskFilter({filters, dispatch}) {

    return (
        <div className={styles.filterContainer}>
            <input type={'text'}
                   value={filters.text}
                   onChange={(e) =>
                       dispatch({type: 'changeText', text: e.target.value})}
                   className={styles.input}/>
            <select value={filters.completed}
                    onChange={e =>
                        dispatch({type: 'changeStatus', status: e.target.value})}
                    className={styles.select}>
                <option value={'all'}>All</option>
                <option value={'completed'}>Completed</option>
                <option value={'uncompleted'}>Uncompleted</option>
            </select>
        </div>
    )
}