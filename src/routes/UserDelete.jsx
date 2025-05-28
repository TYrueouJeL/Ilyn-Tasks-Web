import { useState } from "react";
import {useLoaderData, useNavigate} from "react-router";
import UserDeleteForm from "../components/user/UserDeleteForm.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const userResponse = await fetch(`${ApiUrl}/api/users/${params.id}`);
    const user = await userResponse.json();

    return { user };
}

export default function UserDelete() {
    const { user } = useLoaderData();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const deleteUser = async (userId) => {
        setIsLoading(true);
        setError(null);

        try {
            if (user.tasks.length > 0) {
                const taskDeletePromises = user.tasks.map(task =>
                    fetch(`${ApiUrl}${task}`, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/ld+json",
                        },
                    })
                );
                await Promise.all(taskDeletePromises);
            }

            if (user.categories.length > 0) {
                const categoryDeletePromises = user.categories.map(category =>
                    fetch(`${ApiUrl}${category}`, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/ld+json",
                        },
                    })
                );
                await Promise.all(categoryDeletePromises);
            }

            const response = await fetch(`${ApiUrl}/api/users/${userId}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/ld+json",
                },
            });

            if (!response.ok) {
                throw new Error(`Erreur: ${response.status}`);
            }

            console.log("Réponse du serveur:", response);
            navigate("/");
        } catch (err) {
            setError(`Échec de la suppression de l'utilisateur: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            {error && <div className="error">{error}</div>}
            <UserDeleteForm onSubmit={deleteUser} isLoading={isLoading} user={user} />
        </div>
    )
}