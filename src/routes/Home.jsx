import SearchForm from '../components/SearchForm';
import { useEffect, useState } from 'react';
import TaskList from '../components/task/TaskList.jsx';

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Home() {
    const [tasks, setTasks] = useState([]);
//    const [search, setSearch] = useState({ title: '' });

    useEffect(() => {
        fetch(`${ApiUrl}/tasks`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTasks(data);
                } else if (Array.isArray(data.member)) {
                    setTasks(data.member);
                } else if (data.tasks && Array.isArray(data.tasks)) {
                    setTasks(data.tasks);
                } else {
                    console.error('Format de données inattendu:', data);
                    setTasks([]);
                }
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    console.log(tasks);

//    const filteredTasks = tasks ? tasks.filter(task => {
//        const title = task.title?.toLowerCase() || '';
//        const searchTitle = search.title.toLowerCase();
//        return title.includes(searchTitle);
//    }) : [];

    const tasksToComplete = tasks.filter(task => !task.completed);

    return (
        <>
            <h1>{tasksToComplete.length} tâches restantes</h1>
            <TaskList tasks={tasks} />
        </>
    );
}