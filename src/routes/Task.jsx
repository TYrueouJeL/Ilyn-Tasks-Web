import { useLoaderData } from "react-router";
import TaskDetails from "../components/task/TaskDetails.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const taskResponse = await fetch(`${ApiUrl}/api/tasks/${params.id}`);
    const task = await taskResponse.json();

    const categoryResponse = await fetch(`${ApiUrl}${task.category}`);
    const category = await categoryResponse.json();

    const priorityResponse = await fetch(`${ApiUrl}${task.priority}`);
    const priority = await priorityResponse.json();

    return { task, category, priority };
}

export default function Task() {
    const { task, category, priority } = useLoaderData();

    return (<TaskDetails task={task} category={category} priority={priority} />);
}