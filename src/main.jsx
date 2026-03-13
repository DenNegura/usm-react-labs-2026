import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import App from "./App.jsx";
import {TaskProvider} from "./provider/TaskProvider.jsx";

createRoot(document.getElementById('root')).render(
    <TaskProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </TaskProvider>,
)


