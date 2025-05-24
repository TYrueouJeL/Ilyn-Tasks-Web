import {Link} from 'react-router';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri';

export default function TaskCard({ task }) {
    return (
        <article className={`flex items-center gap-4 p-2 border ${task.completed ? 'border-green-500' : 'border-red-500'} rounded-lg`}>
            <h2>{task.title}</h2>
            <button className="gap-4 p-2 border border-gray-200 rounded-lg">
                <Link to={`/task/${task.id}`}>Voir plus</Link>
            </button>
        </article>
    );
}