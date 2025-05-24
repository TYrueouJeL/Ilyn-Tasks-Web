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
                                    <Link to="/" className="text-white hover:text-orange-200">Accueil</Link>
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