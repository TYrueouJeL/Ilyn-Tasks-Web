import {Link} from "react-router";
import { FaRegFolderOpen } from "react-icons/fa";

export default function CategoryCard({ category }) {
    return (
    <Link to={`/category/${category.id}`}>
        <article className={`card-button card-button--category`}
                 style={{
                     borderColor: category.color,
                     backgroundColor: `${category.color}20`,
                     '--category-color-hover': `${category.color}40`
        }}>
            <div className="flex flex-col">
                <h2>{category.name}</h2>
            </div>

            <FaRegFolderOpen className="text-black ml-auto" />
        </article>
    </Link>
    );
}