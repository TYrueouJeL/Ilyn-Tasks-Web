export default function PriorityDetails({ priority }) {
    if (!priority) {
        return <div>Priorité non trouvée</div>;
    }

    return (
        <>
            <h1 className={"title"}>Détail de la priorité</h1>

            <article className={"article"}>
                <div className="flex flex-col">
                    <h2>{priority.name}</h2>
                </div>
            </article>

            <div className="flex flex-row gap-4">
                <article className={`article flex-1`}
                         style={{
                             borderColor: priority.color,
                             backgroundColor: `${priority.color}20`,
                             '--category-color-hover': `${priority.color}40`
                         }}>
                    <p>Couleur : {priority.color}</p>
                </article>
            </div>
        </>
    );
}