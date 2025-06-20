import '../css/index.css'
import logo from '../assets/logo-toute_page.png'

function Navigation() { 
    return (
            <nav className="flex justify-between items-center p-4 font-poppins">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-10 h-10" />
                    <h1 className="ml-3 text-2xl font-bold font-poppins">Excuse Pro</h1>
                </div>
            <div className="flex items-center gap-4">
                <a href="/" className="text-md font-medium font-poppins">Fonctionnalités</a>
                <a href="/" className="text-md font-medium font-poppins">Tarifs</a>
                <button type="submit" className="bg-fuchsia-600 text-white px-4 py-2 rounded-3xl cursor-pointer
                 hover:bg-fuchsia-700 font-poppins font-medium">Créer une excuse</button>
            </div>
        </nav>
    )
}

export default Navigation;