import img from '../assets/func.png'
import Cards from '../component/cards.tsx'
import { motion } from 'framer-motion'

export default function Fonctionnalites() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center min-h-screen py-6 md:py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <motion.section 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center justify-between w-full rounded-3xl p-6 md:p-12 dark:bg-gray-900 transition-colors duration-300 gap-8 md:gap-0"
            >
                <div className="flex-1 pr-0 md:pr-8 text-center md:text-left">
                    <motion.h1 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold font-poppins mb-6 md:mb-8 leading-tight text-gray-900 dark:text-white"
                    >
                        Toutes nos <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text text-transparent"
                        >
                            Fonctionnalités
                        </motion.span>
                    </motion.h1>
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
            <Cards />
        </motion.main>
    )
} 