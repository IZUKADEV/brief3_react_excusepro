import { motion } from 'framer-motion';
import img from '../assets/tarifs.png';

export default function APropos() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between w-full rounded-3xl p-6 md:p-12 dark:bg-gray-900 transition-colors duration-300 gap-8 md:gap-0"
        >
            <div className="flex-1 pr-0 md:pr-8 text-center md:text-left">
                <motion.h1
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold font-poppins mb-6 md:mb-8 leading-tight text-gray-900 dark:text-white"
                >
                    A propos
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl font-poppins text-gray-500 dark:text-gray-300 mb-6 md:mb-8"
                >
                    ExcusePro est votre solution ultime pour générer des excuses de qualité. Notre mission est de vous fournir des prétextes crédibles et sur mesure, adaptés à chaque situation.
                </motion.p>
            </div>
            <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 flex justify-center md:justify-end"
            >
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={img}
                    alt="avatar"
                    className="w-full max-w-sm md:max-w-l h-auto object-contain md:mr-40"
                />
            </motion.div>
        </motion.div>
    );
} 