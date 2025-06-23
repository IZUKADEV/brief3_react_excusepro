import img from '../assets/func.png'

export default function Fonctionnalites() {
    return (
        <main className="flex flex-col items-center min-h-screen py-6 md:py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <section className="flex flex-col md:flex-row items-center justify-between w-full rounded-3xl p-6 md:p-12 dark:bg-gray-900 transition-colors duration-300 gap-8 md:gap-0">
                    <div className="flex-1 pr-0 md:pr-8 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 md:mb-8 leading-tight text-gray-900 dark:text-white">
                            Toutes nos  <span className="bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text text-transparent">Fonctionnalités</span>
                        </h1>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img src={img} alt="section-1" className="w-full max-w-sm md:max-w-xl h-auto object-contain md:mr-40"/>
                    </div>
                </section>
        </main>
    )
} 