import { useLoaderData } from "react-router";
import CategoryDetails from "../components/category/CategoryDetails.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const categoryResponse = await fetch(`${ApiUrl}/api/categories/${params.id}`);
    const category = await categoryResponse.json();

    const userResponse = await fetch(`${ApiUrl}${category.users}`);
    const user = await userResponse.json();

    return { category, user };
}

export default function Category() {
    const { category, user } = useLoaderData();

    return (<CategoryDetails category={category} user={user}/>);
}