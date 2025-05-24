export default function UserDetails({ user }) {
    if (!user) {
        return <div>Utilisateur non trouvé</div>;
    }

    return (
        <>
            <h1 className={"title"}>Détail de l'utilisateur</h1>

            <article className={"article"}>
                <div className="flex flex-col">
                    <h2>{user.username}</h2>
                    <p className="text-sm text-gray-500">Email : {user.email}</p>
                </div>
            </article>

            <button className={"navigation-button"}><a href={"/"}>Retour</a></button>
        </>
    );
}