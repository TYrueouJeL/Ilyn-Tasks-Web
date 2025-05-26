import { Link, Outlet } from "react-router";

function App() {
    return (
        <>
            <header className="bg-gradient-to-r from-orange-400 to-purple-600 text-white p-4 mb-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl">Ilyn Tasks</h1>
                        <nav>
                            <ul className="flex gap-4">
                                <li>
                                    <ul className="flex gap-2">
                                        <li><Link to="/" className="text-white hover:text-orange-200 px-2">Accueil</Link></li>
                                        <li><Link to={"/"} className="text-white hover:text-orange-200 px-2">Tâches</Link></li>
                                        <li><Link to={"/"} className="text-white hover:text-orange-200 px-2">Priorités</Link></li>
                                        <li><Link to={"/"} className="text-white hover:text-orange-200 px-2">Catégories</Link></li>
                                        <li><Link to={"/"} className="text-white hover:text-orange-200 px-2">Utilisateurs</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <Outlet/>
            </main>
        </>
    )
}

export default App;