import './App.css'
import TaskPage from "./components/TaskPage";
import {TaskProvider} from "./provider/TaskProvider.jsx";

function App() {
    return (
        <>
        <TaskProvider>
            <TaskPage/>
        </TaskProvider>
    </>
    );
}

export default App
