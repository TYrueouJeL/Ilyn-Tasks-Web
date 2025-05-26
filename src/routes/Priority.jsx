import { useLoaderData } from "react-router";
import PriorityDetails from "../components/priority/PriorityDetails.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const priorityResponse = await fetch(`${ApiUrl}/api/priorities/${params.id}`);
    const priority = await priorityResponse.json();

    return { priority };
}

export default function Priority() {
    const { priority } = useLoaderData();

    return (<PriorityDetails priority={priority}/>);
}