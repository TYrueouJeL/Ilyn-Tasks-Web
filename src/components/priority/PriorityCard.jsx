import { Link } from 'react-router';
import { IoWarningOutline } from "react-icons/io5";

export default function PriorityCard({ priority }) {
    return (
        <Link to={`/priority/${priority.id}`}>
            <article className={`card-button card-button--priority`}
                     style={{
                         borderColor: priority.color,
                         backgroundColor: `${priority.color}20`,
                         '--category-color-hover': `${priority.color}40`
                     }}>
                <div className="flex flex-col">
                    <h2>{priority.name}</h2>
                </div>

                <IoWarningOutline className="text-black ml-auto" />
            </article>
        </Link>
    );
}