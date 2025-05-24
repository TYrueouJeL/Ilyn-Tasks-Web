export default function TaskDetails({ task, category, priority }) {
    if (!task) {
        return <div>Task not found</div>
    }

    if (!category) {
        return <div>Category not found</div>
    }

    if (!priority) {
        return <div>Priority not found</div>
    }

    return (
        <>
            <h1 className={"title"}>Détail de la tâche</h1>

            <article className={"article"}>
                <div className="flex flex-col">
                    <h2>{task.title}</h2>
                    <p className="text-sm text-gray-500">Date limite : {new Date(task.dueDate).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric'})}</p>
                </div>
            </article>

            <div className="flex flex-row gap-4">
                <article className={`article-state flex-1 ${new Date(task.dueDate) < new Date() ? 'card-button--failed' : (task.completed ? 'card-button--completed' : 'card-button--pending')}`}>
                    <p>État : Tâche
                        {new Date(task.dueDate) < new Date() ?
                            ' ratée' : (
                                task.completed ? ' complétée' : ' en cours'
                            )
                        }
                    </p>
                </article>

                <article className={"article flex-1"}>
                    <p>Date limite : {new Date(task.dueDate).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric'})}</p>
                </article>

                <article className={`article flex-1`}
                         style={{
                             borderColor: category.color,
                             backgroundColor: `${category.color}20`,
                             '--category-color-hover': `${category.color}40`
                         }}>
                    <p>Catégorie : {category.name}</p>
                </article>

                <article className={`article flex-1`}
                         style={{
                             borderColor: priority.color,
                             backgroundColor: `${priority.color}20`,
                             '--category-color-hover': `${priority.color}40`
                         }}>
                    <p>Priorité : {priority.name}</p>
                </article>
            </div>

            <article className={"article flex-4"}>
                <p>{task.description}</p>
            </article>

            <button className={"navigation-button"}><a href={"/"}>Retour</a></button>
        </>
    )
}