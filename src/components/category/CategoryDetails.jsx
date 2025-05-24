import { FaSquareFull } from "react-icons/fa6";

export default function CategoryDetails({ category, user }) {
    if (!category) {
        return <div>Category not found</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <>
            <h1 className="title">Détail de la catégorie</h1>

            <div className={"flex flex-row gap-4"}>
                <article className={"article flex-1"}>
                    <h2>{category.name}</h2>
                </article>

                <article className={"article flex-1"}>
                    <p>Couleur :</p>

                    <FaSquareFull color={category.color} className={"border-1 border-black"}/>
                </article>

                <article className={"article flex-1"}>
                    <p>Créée par :</p>
                    <p>{user.username}</p>
                </article>
            </div>

            <button className={"navigation-button"}><a href={"/"}>Retour</a></button>
        </>
    );
}