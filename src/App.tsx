import img from './assets/section-1.png'
import img2 from './assets/avatar.png'
import { motion } from 'framer-motion'

export default function App() {
    return (
        <>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center min-h-screen py-6 md:py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
            >
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between w-full rounded-3xl p-6 md:p-12 dark:bg-gray-900 transition-colors duration-300 gap-8 md:gap-0"
                >
                    <div className="flex-1 pr-0 md:pr-8 text-center md:text-left">
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold font-poppins mb-6 md:mb-8 leading-tight text-gray-900 dark:text-white"
                        >
                            Trouvez <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text text-transparent"
                            >
                                l'excuse
                            </motion.span> parfaite. En un click
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-2xl font-poppins text-gray-500 dark:text-gray-300 mb-6 md:mb-8"
                        >
                            Laissez-nous vous sauver la face.
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            type="submit"
                            className="w-full md:w-auto bg-fuchsia-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-medium text-lg md:text-xl transition dark:bg-fuchsia-700 dark:hover:bg-fuchsia-800"
                        >
                            Générer une excuse
                        </motion.button>
                    </div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src={img}
                            alt="section-1"
                            className="w-full max-w-sm md:max-w-xl h-auto object-contain md:mr-40"
                        />
                    </motion.div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full px-4 py-8 md:py-16 gap-6 md:gap-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
                        {[1, 2, 3].map((index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-14 md:w-16 h-14 md:h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-4 md:mb-6"
                                >
                                    <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        {index === 1 ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        ) : index === 2 ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        )}
                                    </svg>
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.8 }}
                                    className="text-lg md:text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3 md:mb-4"
                                >
                                    {index === 1 ? "IA contextuelle" : index === 2 ? "Envoi par mail ou slack" : "Excuses personnalisées"}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.9 }}
                                    className="text-sm md:text-base text-gray-600 dark:text-gray-300"
                                >
                                    {index === 1 ? "Des excuses générées en fonction de votre situation" : index === 2 ? "Envoyez vos excuses en un simple click" : "Adaptez vos excuses à vos audiences"}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-col md:flex-row items-center justify-between w-full rounded-3xl p-6 md:p-12 dark:bg-gray-900 transition-colors duration-300"
                >
                    <div className="flex-1 pr-0 md:pr-8 text-center md:text-left">
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="text-3xl md:text-5xl font-bold font-poppins mb-6 md:mb-8 leading-tight text-gray-900 dark:text-white"
                        >
                            "La meilleure solution pour éviter les responsabilités"
                        </motion.h1>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 md:mb-8"
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={img2}
                                alt="avatar"
                                className="w-16 h-16 object-cover rounded-full border-2 border-gray-300 dark:border-gray-700"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6 }}
                                className="text-gray-600 dark:text-gray-300 font-bold underline mt-5"
                            >
                                Dimitri C. - Developer
                            </motion.p>
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.8 }}
                            type="submit"
                            className="w-full md:w-auto bg-fuchsia-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-medium text-lg md:text-xl transition dark:bg-fuchsia-700 dark:hover:bg-fuchsia-800"
                        >
                            Commencer
                        </motion.button>
                    </div>
                </motion.section>
            </motion.main>
        </>
    )
}

