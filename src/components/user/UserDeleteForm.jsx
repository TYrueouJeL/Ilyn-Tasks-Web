export default function UserDeleteForm({ user, onSubmit, isLoading }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(user.id);
    };

    return (
        <>
            <h1 className={"title"}>Supprimer l'utilisateur</h1>

            <form onSubmit={handleSubmit} className={"space-y-4 mx-w-md"}>
                <p>Êtes-vous sûr de vouloir supprimer l'utilisateur {user.username} ainsi que toutes ses tâches et catégories ?</p>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-4 py-2 text-white bg-red-600 rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {isLoading ? "Suppression en cours..." : "Supprimer l'utilisateur"}
                </button>
            </form>
        </>
    );
}