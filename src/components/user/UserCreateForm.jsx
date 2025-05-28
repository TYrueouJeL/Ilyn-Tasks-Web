import { useState } from "react";
import { useNavigate } from "react-router";

export default function UserCreateForm({ onSubmit, isLoading }) {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categories = [];
        const tasks = [];
        const userData = { email, password, username, categories, tasks };
        await onSubmit(userData);
    };

    return (
        <>
            <h1 className={"title"}>Créer un utilisateur</h1>

            <form onSubmit={handleSubmit} className={"space-y-4 mx-w-md"}>
                <div className={"flex flex-col"}>
                    <label htmlFor={"username"} className={"mb-1 text-sm font-medium text-gray-700"}>
                        Nom d'utilisateur:
                    </label>

                    <input
                        id={"username"}
                        type={"text"}
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required
                        className={"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
                    />
                </div>

                <div className={"flex flex-col"}>
                    <label htmlFor={"email"} className={"mb-1 text-sm font-medium text-gray-700"}>
                        Email:
                    </label>

                    <input
                        id={"email"}
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-blue-500"}
                    />
                </div>

                <div className={"flex flex-col"}>
                    <label htmlFor={"password"} className={"mb-1 text-sm font-medium text-gray-700"}>
                        Mot de passe:
                    </label>

                    <input
                        id={"password"}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-blue-500"}
                    />
                </div>

                <div className={"flex flex-col"}>
                    <button
                        type={"submit"}
                        disabled={isLoading}
                        className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? "Création en cours..." : "Créer l'utilisateur"}
                    </button>

                    <button
                        type={"button"}
                        onClick={() => navigate("/")}
                        className={"mt-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"}
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </>
    )
}