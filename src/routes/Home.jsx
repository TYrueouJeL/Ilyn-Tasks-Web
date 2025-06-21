import { useEffect, useState } from 'react';
import TaskList from '../components/task/TaskList.jsx';
import ProjectList from '../components/project/ProjectList.jsx';
import CategoryList from '../components/category/CategoryList.jsx';
import UserList from "../components/user/UserList.jsx";
import PriorityList from "../components/priority/PriorityList.jsx";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [priorities, setPriorities] = useState([]);

    useEffect(() => {
        fetch(`${ApiUrl}/api/tasks`)
            .then(response => response.json())
            .then(data => {setTasks(data.member);})
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    useEffect(() => {
        fetch(`${ApiUrl}/api/projects`)
            .then(response => response.json())
            .then(data => {setProjects(data.member);})
            .catch(error => console.error('Error fetching projects:', error));
    })

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

    useEffect(() => {
        fetch(`${ApiUrl}/api/priorities`)
            .then(response => response.json())
            .then(data => {setPriorities(data.member);})
            .catch(error => console.error('Error fetching priorities:', error));
    }, []);

    return (
        <>
            <h1>Bienvenue !</h1>

            <TaskList tasks={tasks} />
            <ProjectList projects={projects} />
            <CategoryList categories={categories} />
            <PriorityList priorities={priorities} />
            <UserList users={users} />
        </>
    );
}