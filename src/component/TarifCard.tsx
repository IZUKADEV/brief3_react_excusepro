import { motion } from 'framer-motion';

type TarifCardProps = {
    title: string;
    price: string;
    features: string[];
    buttonLabel: string;
    delay?: number;
};

export default function TarifCard({ title, price, features, buttonLabel, delay = 0 }: TarifCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex-1 bg-white dark:bg-gray-800 dark:text-white rounded-2xl h-96 shadow-lg p-8 flex flex-col items-center mb-10"
        >
            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.1 }}
                className="text-2xl font-semibold mb-2"
            >
                {title}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.15 }}
                className="text-3xl font-bold mb-4 font-poppins bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text text-transparent"
            >
                {price}
            </motion.p>
            <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.2 }}
                className="text-gray-700 dark:text-gray-200 mb-6 space-y-2 text-center font-poppins font-medium text-xl"
            >
                {features.map((f, i) => (
                    <li key={i}>• {f}</li>
                ))}
            </motion.ul>
            <motion.button
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="bg-fuchsia-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-fuchsia-700 transition font-poppins mt-16"
            >
                {buttonLabel}
            </motion.button>
        </motion.div>
    );
} 