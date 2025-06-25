import { motion } from 'framer-motion';
import APropos from '../component/APropos';
import SectionTarifs from '../component/SectionTarifs';

export default function Tarifs() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center min-h-screen py-6 md:py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <APropos />
            <SectionTarifs />
        </motion.main>
    );
} 