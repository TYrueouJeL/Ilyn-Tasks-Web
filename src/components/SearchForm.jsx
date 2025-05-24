export default function SearchForm({ search, onSearch, placeholderContent }) {
    function handleChange(event) {
        onSearch({ ...search, [event.target.name]: event.target.value });
    }

    return (
        <form className={"mb-4"}>
            <input
                type="text"
                name="name"
                value={search.name}
                onChange={handleChange}
                placeholder={`Chercher ${placeholderContent}`}
                className="p-2 border border-gray-200 rounded-lg"
            />
        </form>
    );
}