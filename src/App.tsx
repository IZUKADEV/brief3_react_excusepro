import Navigation from './component/Navigation.tsx'
import img from './assets/section-1.png'

export default function App() {
    return (
        <>
        <div className="bg-white dark:bg-black text-black dark:text-white p-4 m-4 rounded">
  Test Tailwind : change le mode
</div>
            <Navigation />
            <main className="flex flex-col items-center min-h-screen py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <section className="flex flex-row items-center justify-between w-full rounded-3xl p-12 bg-white dark:bg-gray-900 transition-colors duration-300">
                    <div className="flex-1 pr-8">
                        <h1 className="text-5xl font-bold font-poppins mb-8 leading-tight text-gray-900 dark:text-white">
                            Trouvez <span className="bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text text-transparent">l'excuse </span> parfaite. En un click
                        </h1>
                        <p className="text-2xl font-poppins text-gray-500 dark:text-gray-300 mb-8">
                            Laissez-nous vous sauver la face.
                        </p>
                        <button type="submit" className="bg-fuchsia-600 text-white px-8 py-4 rounded-2xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-medium text-xl transition dark:bg-fuchsia-700 dark:hover:bg-fuchsia-800">
                            Générer une excuse
                        </button>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <img src={img} alt="section-1" className="w-full max-w-xl h-auto object-contain"/>
                    </div>
                </section>
            </main>
        </>
    )
}

