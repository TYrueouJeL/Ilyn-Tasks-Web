import { useLoaderData } from "react-router";
import UserDetails from "../components/user/UserDetails.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const userResponse = await fetch(`${ApiUrl}/api/users/${params.id}`);
    const user = await userResponse.json();

    return { user };
}

export default function User() {
    const { user } = useLoaderData();

    return (<UserDetails user={user} />);
}