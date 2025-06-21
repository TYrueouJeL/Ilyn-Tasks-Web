import { Link } from 'react-router';
import {RiCheckLine, RiCloseLine, RiTimeLine} from "react-icons/ri";

export default function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.id}`}>
            <article className={`card-button ${project.completed ? 'card-button--completed' : (new Date(project.dueDate) < new Date() ? 'card-button--failed' : 'card-button--pending')}`}>
                <div className="flex flex-col">
                    <h2>{project.title}</h2>
                    <p className="text-sm text-gray-500">Date limite : {new Date(project.dueDate).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric'})}</p>
                </div>
                {project.completed ?
                    <RiCheckLine className="text-green-500 ml-auto" /> :
                    (new Date(project.dueDate) < new Date() ?
                            <RiCloseLine className="text-red-500 ml-auto" /> :
                            <RiTimeLine className="text-yellow-500 ml-auto" />
                    )
                }
            </article>
        </Link>
    );
}