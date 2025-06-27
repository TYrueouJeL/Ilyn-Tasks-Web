import CategoryCard from './CategoryCard';
import SearchForm from '../SearchForm';
import { useState } from 'react';

export default function CategoryList({categories}) {
    const [search, setSearch] = useState({name: ''});

    if (!categories || categories.length === 0) {
        return <p className="text-gray-500">Aucune catégorie trouvée.</p>;
    }

    const filteredCategories = categories.filter(category => {
        const name = category.name.toLowerCase();
        const searchName = search.name.toLowerCase();
        return name.includes(searchName);
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const cards = filteredCategories.map(category => <CategoryCard key={category.id} category={category} />);

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold mb-4">Liste des catégories</h1>

                <SearchForm
                    search={search}
                    onSearch={formData => setSearch(formData)}
                    placeholderContent="catégories"
                    onSubmit={handleFormSubmit}
                    searchChamp="name"
                />
            </div>

            <h1>{filteredCategories.length} Catégories</h1>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4 ml-2 mr-2">
                {cards}
            </section>
        </>
    );}