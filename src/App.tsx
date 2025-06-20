import Navigation from './component/Navigation.tsx'

function App() {
    return (
        <>
            <Navigation />
            <div className="relative m-10 w-190">
                <h1 className="ml-20 text-5xl font-bold font-poppins">Trouvez <span className="bg-linear-90 from-purple-400 to-red-600 bg-clip-text text-transparent">l'excuse </span> parfaite. En un click</h1>
                <p className="ml-20 m-5 text-2xl font-poppins text-gray-500 w-1/2">
                En retard ? Oublier un rendez vous ? Laissez nous vous sauver la face
                </p>
                <button type="submit" className="ml-80 bg-fuchsia-600 text-white px-4 py-2 rounded-3xl cursor-pointer
                 hover:bg-fuchsia-700 font-poppins font-medium">Générer une excuse</button>
            </div>
        </>
    )
}

export default App;