import { useEffect, useState } from 'react';
import TaskList from '../components/task/TaskList.jsx';
import CategoryList from '../components/category/CategoryList.jsx';
import UserList from "../components/user/UserList.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);

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

    useEffect(() => {
        fetch(`${ApiUrl}/api/users`)
            .then(response => response.json())
            .then(data => {setUsers(data.member);})
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <>
            <TaskList tasks={tasks} />

            <CategoryList categories={categories} />

            <UserList users={users} />
        </>
    );
}