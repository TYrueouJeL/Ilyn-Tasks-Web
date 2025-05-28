import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoaderData } from "react-router";
import UserEditForm from "../components/user/UserEditForm.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export async function loader({ params }) {
    const userResponse = await fetch(`${ApiUrl}/api/users/${params.id}`);
    const user = await userResponse.json();

    return { user };
}

export default function UserEdit() {
    const { user } = useLoaderData();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const updateUser = async (userData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${ApiUrl}/api/users/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/merge-patch+json",
                    "Accept": "application/ld+json, application/merge-patch+json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                console.error(response.error);
                throw new Error(`Erreur: ${response.status}`);
            }

            console.log("Réponse du serveur:", response);

            const updatedUser = await response.json();
            navigate(`/user/${updatedUser.id}`);
        } catch (err) {
            setError(`Échec de la mise à jour de l'utilisateur: ${err.message}`);
            return false;
        } finally {
            setIsLoading(false);
        }
        return true;
    };

    return (
        <div className="container">
            {error && <p className="text-red-500">{error}</p>}
            <UserEditForm user={user} onSubmit={updateUser} isLoading={isLoading} />
        </div>
    );
}