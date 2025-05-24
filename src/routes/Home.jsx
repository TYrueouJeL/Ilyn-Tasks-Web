import { useEffect, useState } from 'react';
import TaskList from '../components/task/TaskList.jsx';

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${ApiUrl}/api/tasks`)
            .then(response => response.json())
            .then(data => {setTasks(data.member);})
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <>
            <TaskList tasks={tasks} />
        </>
    );
}