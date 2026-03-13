import './App.css'
import {Route, Routes} from "react-router";
import TaskPage from "./pages/TaskPage";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TaskFormPage from "./pages/TaskFormPage";
import AppLayout from "./router/AppLayout.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="/tasks" element={<TaskPage/>}/>
                <Route path="/tasks/:id" element={<TaskFormPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Route>
        </Routes>
    );
}

export default App
