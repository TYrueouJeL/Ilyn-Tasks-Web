import SearchForm from '../components/SearchForm';
import { useEffect, useState } from 'react';
import TaskList from '../components/task/TaskList.jsx';

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState({ title: '' });

    useEffect(() => {
        fetch(`${ApiUrl}/api/tasks`)
            .then(response => response.json())
            .then(data => {setTasks(data.member);})
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    console.log(tasks);

    const filteredTasks = tasks.filter(task => {
        const title = task.title.toLowerCase();
        const searchTitle = search.title.toLowerCase();
        return title.includes(searchTitle);
    });

    const finishedTasks = filteredTasks.filter(task => task.completed === true);
    const unfinishedTasks = filteredTasks.filter(task => task.completed === false);
    const failedTasks = filteredTasks.filter(task => new Date(task.dueDate) < new Date() && task.completed === false);

    return (
        <>
            <SearchForm search={search} onSearch={formData => setSearch(formData)} />
            <div className={'flex gap-4 items-center mb-4'}>
                <h1>{finishedTasks.length} Tâche(s) terminée(s)</h1>
                <h1>{unfinishedTasks.length} Tâche(s) en cours</h1>
                <h1>{failedTasks.length} Tâche(s) ratée(s)</h1>
            </div>
            <TaskList tasks={filteredTasks} />
        </>
    );
}