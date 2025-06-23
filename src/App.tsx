import img from './assets/section-1.png'
import img2 from './assets/avatar.png'

export default function App() {
    return (
        <>
            <main className="flex flex-col items-center min-h-screen py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <section className="flex flex-row items-center justify-between w-full rounded-3xl p-12 dark:bg-gray-900 transition-colors duration-300">
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
                    </div>r
                    <div className="flex-1 flex justify-end">
                        <img src={img} alt="section-1" className="w-full max-w-xl h-auto object-contain mr-40"/>
                    </div>
                </section>

                <section className="w-full px-4 py-16 gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300">
                            <div className="w-16 h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-4">IA contextuelle</h3>
                            <p className="text-gray-600 dark:text-gray-300">Des excuses générées en fonction de votre situation</p>
                        </div>


                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300">
                            <div className="w-16 h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-4">Envoi par mail ou slack</h3>
                            <p className="text-gray-600 dark:text-gray-300">Envoyez vos excuses en un simple click</p>
                        </div>


                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300">
                            <div className="w-16 h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-4">Excuses personnalisées</h3>
                            <p className="text-gray-600 dark:text-gray-300">Adaptez vos excuses à vos audiences</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-row items-center justify-between w-full rounded-3xl p-12 dark:bg-gray-900 transition-colors duration-300">
                    <div className="flex-1 pr-8">
                        <h1 className="text-5xl font-bold font-poppins mb-8 leading-tight text-gray-900 dark:text-white">"La meilleure solution pour éviter les responsabilités"</h1>
                    <div className="flex flex-row items-center">
                        <p className="text-gray-600 dark:text-gray-300">Dimitri C. - Developer</p>
                        <img src={img2} alt="section-1" className="w-16 max-w-xl h-auto object-contain mr-40 rounded-full ml-2 border-2 border-gray-300 dark:border-gray-700"/>
                    </div>
                    </div>
                </section>
            </main>
        </>
    )
}

