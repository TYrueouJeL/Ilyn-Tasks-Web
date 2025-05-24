import UserCard from "./UserCard";
import SearchForm from "../SearchForm";
import {useState} from "react";

export default function UserList({users}) {
    const [search, setSearch] = useState({ username: '' });

    const filteredUsers = users.filter(user => {
        const name = user.username.toLowerCase();
        const searchName = search.username.toLowerCase();
        return name.includes(searchName);
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const cards = filteredUsers.map(user => <UserCard key={user.id} user={user} />);

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className={"title"}>Liste des utilisateurs</h1>

                <SearchForm
                    search={search}
                    onSearch={formData => setSearch(formData)}
                    placeholderContent="utilisateurs"
                    onSubmit={handleFormSubmit}
                    searchChamp="username"
                />
            </div>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4 ml-2 mr-2">
                {cards}
            </section>
        </>
    );
}