export default function Cards() { 
    return (
    <section className="w-full px-4 py-8 md:py-16 gap-6 md:gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300">
                            <div className="w-14 md:w-16 h-14 md:h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3 md:mb-4">IA contextuelle</h3>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Des excuses générées en fonction de votre situation</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300">
                            <div className="w-14 md:w-16 h-14 md:h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3 md:mb-4">Envoi par mail ou slack</h3>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Envoyez vos excuses en un simple click</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300">
                            <div className="w-14 md:w-16 h-14 md:h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3 md:mb-4">Excuses personnalisées</h3>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Adaptez vos excuses à vos audiences</p>
                        </div>
                    </div>
                </section>
    )
}