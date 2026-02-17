import TodoCard from "../TaskCard/TaskCard.jsx";

export default function TaskList({tasks, onUpdateTask, onDeleteTask}) {
    return (
        <>
            {
                tasks.map(item =>
                    <TodoCard key={item.id}
                              task={item}
                              onUpdate={onUpdateTask}
                              onDelete={onDeleteTask}
                    />)
            }
        </>
    )
}