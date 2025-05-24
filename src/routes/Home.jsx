import { useEffect, useState } from 'react';
import TaskList from '../components/task/TaskList.jsx';
import CategoryList from '../components/category/CategoryList.jsx';

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${ApiUrl}/api/tasks`)
            .then(response => response.json())
            .then(data => {setTasks(data.member);})
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    useEffect(() => {
        fetch(`${ApiUrl}/api/categories`)
            .then(response => response.json())
            .then(data => {setCategories(data.member);})
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <>
            <TaskList tasks={tasks} />

            <CategoryList categories={categories} />
        </>
    );
}