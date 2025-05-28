import PriorityCard from "./PriorityCard.jsx";
import SearchForm from "../SearchForm.jsx";
import {useState} from "react";

export default function PriorityList({priorities}) {
    const [search, setSearch] = useState({ name: '' });

    const filteredPriorities = priorities.filter(priority => {
        const name = priority.name.toLowerCase();
        const searchName = search.name.toLowerCase();
        return name.includes(searchName);
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const cards = filteredPriorities.map(priority => <PriorityCard key={priority.id} priority={priority} />);

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className={"title"}>Liste des priorités</h1>

                <SearchForm
                    search={search}
                    onSearch={formData => setSearch(formData)}
                    placeholderContent="priorités"
                    onSubmit={handleFormSubmit}
                    searchChamp="name"
                />
            </div>

            <h1>{filteredPriorities.length} Priorités </h1>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4 ml-2 mr-2">
                {cards}
            </section>
        </>
    );
}