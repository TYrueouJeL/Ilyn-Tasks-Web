import { useLoaderData } from "react-router";
import ProjectDetails from "../components/project/ProjectDetails.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const projectResponse = await fetch(`${ApiUrl}/api/projects/${params.id}`);
    const project = await projectResponse.json();

    const taskPromises = project.tasks.map(taskUrl =>
        fetch(`${ApiUrl}${taskUrl}`).then(response => response.json())
    );

    const tasksArray = await Promise.all(taskPromises);

    const tasks = tasksArray.flat();

    console.log(tasks)

    return { project, tasks };
}

export default function Project() {
    const { project, tasks } = useLoaderData();

    return (<ProjectDetails project={project} tasks={tasks} />);
}