import { useState } from "react";
import { useNavigate } from "react-router";

export default function UserEditForm({ user, onSubmit, isLoading }) {
    const [username, setUsername] = useState(user.username || "");
    const [email, setEmail] = useState(user.email || "");
    const [password, setPassword] = useState("");
    const [categories] = useState(user.categories || []);
    const [tasks] = useState(user.tasks || []);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password, username, categories, tasks };
        await onSubmit(userData);
        navigate(`/user/${user.id}`);
    };

    return (
        <>
            <h1 className={"title"}>Modifier l'utilisateur</h1>

            <form onSubmit={handleSubmit} className={"space-y-4 mx-w-md"}>
                <div className={"flex flex-col"}>
                    <label htmlFor={"username"} className={"mb-1 text-sm font-medium text-gray-700"}>
                        Nom d'utilisateur:
                    </label>

                    <input
                        id={"username"}
                        type={"text"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        Mot de passe (laisser vide pour ne pas changer):
                    </label>

                    <input
                        id={"password"}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {isLoading ? "Enregistrement..." : "Enregistrer les modifications"}
                </button>
            </form>
        </>
    )
}