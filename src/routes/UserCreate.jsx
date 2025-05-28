import { useState } from "react";
import { useNavigate } from "react-router";
import UserCreateForm from "../components/user/UserCreateForm.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function UserCreate() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const generateJsonLd = (userData) => {
        return {
            "@context": {
                "@vocab": "https://schema.org/",
                "email": "email",
                "password": "password",
                "username": "alternateName",
                "categories": "category",
                "tasks": "potentialAction"
            },
            "@type": "Person",
            "email": userData.email || "",
            "password": userData.password || "",
            "username": userData.username || "",
            "categories": userData.categories || [],
            "tasks": userData.tasks || []
        };
    };

    const createUser = async (userData) => {
        setIsLoading(true);
        setError(null);

        const jsonLdData = generateJsonLd(userData);

        console.log("Données JSON-LD générées:", jsonLdData);

        try {
            const response = await fetch(`${ApiUrl}/api/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/ld+json",
                    "Accept": "application/ld+json",
                },
                body: JSON.stringify(jsonLdData),
            });

            if (!response.ok) {
                throw new Error(`Erreur: ${response.status}`);
            }

            console.log("Réponse du serveur:", response);

            const newUser = await response.json();
            navigate(`/user/${newUser.id}`);
        } catch (err) {
            setError(`Échec de la création de l'utilisateur: ${err.message}`);
            return false;
        } finally {
            setIsLoading(false);
        }
        return true;
    };

    return (
        <div className="container">
            {error && <div className="error">{error}</div>}
            <UserCreateForm onSubmit={createUser} isLoading={isLoading} />
        </div>
    );
}