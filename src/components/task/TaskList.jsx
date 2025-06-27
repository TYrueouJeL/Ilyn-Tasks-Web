import TaskCard from './TaskCard';
import SearchForm from "../SearchForm.jsx";
import {useState} from "react";

export default function TaskList({tasks}) {
    const [search, setSearch] = useState({ title: '' });

    if (!tasks || tasks.length === 0) {
        return <p className="text-gray-500">Aucune tâche trouvée.</p>;
    }

    const filteredTasks = tasks.filter(task => {
        const title = task.title.toLowerCase();
        const searchTitle = search.title.toLowerCase();
        return title.includes(searchTitle);
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const cards = filteredTasks.map(task => <TaskCard key={task.id} task={task} />);

    const finishedTasks = filteredTasks.filter(task => task.completed === true);
    const unfinishedTasks = filteredTasks.filter(task => task.completed === false && new Date(task.dueDate) >= new Date());
    const failedTasks = filteredTasks.filter(task => new Date(task.dueDate) < new Date() && task.completed === false);

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className={"title"}>Liste des tâches</h1>

                <SearchForm
                    search={search}
                    onSearch={formData => setSearch(formData)}
                    placeholderContent="tâches"
                    onSubmit={handleFormSubmit}
                    searchChamp="title"
                />
            </div>

            <div className={'flex gap-4 items-center mb-4'}>
                <h1>{finishedTasks.length} Tâche(s) terminée(s)</h1>
                <h1>{unfinishedTasks.length} Tâche(s) en cours</h1>
                <h1>{failedTasks.length} Tâche(s) ratée(s)</h1>
            </div>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4 ml-2 mr-2">
                {cards}
            </section>
        </>
    );
}