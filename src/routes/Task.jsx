import { useLoaderData } from "react-router";
import TaskDetails from "../components/task/TaskDetails.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const response = await fetch(`${ApiUrl}/api/tasks/${params.id}`);
    const task = await response.json();
    return { task };
}

export default function Task() {
    const { task } = useLoaderData();

    return (<TaskDetails task={task} />);
}