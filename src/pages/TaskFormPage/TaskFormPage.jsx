import {useParams} from "react-router";

export default function TaskFormPage() {

    const {id} = useParams();

    return (
        <div>Task Id: {id}</div>
    )
}