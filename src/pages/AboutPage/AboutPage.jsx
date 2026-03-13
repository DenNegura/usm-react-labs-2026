import Button from "../../components/Button/index.js";
import {useNavigate} from "react-router";

export default function AboutPage() {

    const navigate = useNavigate();

    const openMain = () => navigate("/");

    const openTasks = () => navigate("/tasks");

    const openLast = () => navigate(-1)

    return (
        <>
            <div>AboutPage</div>
            <Button onClick={openMain}>На главную</Button>
            <Button onClick={openTasks}>К задачам</Button>
            <Button onClick={openLast}>На прошлую</Button>
        </>
    )
}
