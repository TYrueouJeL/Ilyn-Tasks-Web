import { Link } from 'react-router';
import { RiUserLine } from 'react-icons/ri';

export default function UserCard({ user }) {
    return (
        <Link to={`/user/${user.id}`}>
            <article className="card-button">
                <div className="flex flex-col">
                    <h2>{user.username}</h2>
                    <p className="text-sm text-gray-500">Email: {user.email}</p>
                </div>
                <RiUserLine className="text-blue-500 ml-auto" />
            </article>
        </Link>
    );
}