import TaskList from "../task/TaskList.jsx";

export default function ProjectDetails({ project, tasks }) {
    if (!project) {
        return <div>Projet non trouvé</div>
    }

    if (!Array.isArray(tasks) || tasks.length === 0) {
        return <div>Aucune tâche trouvée pour ce projet</div>
    }

    console.log("ProjectDetails", project, tasks);

    return (
        <>
            <h1 className={"title"}>Détail du projet</h1>

            <article className={"article"}>
                <div className="flex flex-col">
                    <h2>{project.name}</h2>
                    <p className="text-sm text-gray-500">Date de création
                        : {new Date(project.createDate).toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })}</p>
                </div>
            </article>

            <div className="flex flex-row gap-4">
                <article
                    className={`article-state flex-1 ${project.completed ? 'card-button--completed' : 'card-button--pending'}`}>
                    <p>État : Projet {project.completed ? 'complété' : 'en cours'}</p>
                </article>

                <article className={"article flex-1"}>
                    <p>Date de création : {new Date(project.createDate).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    })}</p>
                </article>

                <article className={"article flex-1"}>
                    <p>{project.description}</p>
                </article>
            </div>

            <section className="mt-6">
                <h3 className="title">Tâches du projet</h3>
                <TaskList tasks={tasks} />
            </section>
        </>
    );
}