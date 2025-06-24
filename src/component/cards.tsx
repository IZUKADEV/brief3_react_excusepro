import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const Card: React.FC<CardProps> = ({ icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-colors duration-300"
    >
        <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-14 md:w-16 h-14 md:h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-4 md:mb-6"
        >
            {icon}
        </motion.div>
        <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="text-lg md:text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3 md:mb-4"
        >
            {title}
        </motion.h3>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-sm md:text-base text-gray-600 dark:text-gray-300"
        >
            {description}
        </motion.p>
    </motion.div>
);

const cardData: CardProps[] = [
    {
        icon: (
            <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: "Excuses Créatives",
        description: "Générez des excuses originales et innovantes",
        index: 0
    },
    {
        icon: (
            <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Envoi Multicanal",
        description: "Envoyez vos excuses par email ou Slack en un clic",
        index: 1
    },
    {
        icon: (
            <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
        title: "Personnalisation Avancée",
        description: "Adaptez vos excuses selon le contexte",
        index: 2
    },
    {
        icon: (
            <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Génération Rapide",
        description: "Obtenez une excuse en quelques secondes",
        index: 3
    },
    {
        icon: (
            <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Confidentialité",
        description: "Vos excuses restent privées et sécurisées",
        index: 4
    },
    {
        icon: (
            <svg className="w-7 md:w-8 h-7 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: "Historique",
        description: "Suivez et réutilisez vos meilleures excuses",
        index: 5
    }
];

export default function Cards(): React.ReactElement {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full px-4 py-8 md:py-16 gap-6 md:gap-10"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
                {cardData.map((card, index) => (
                    <Card key={index} {...card} index={index} />
                ))}
            </div>
        </motion.section>
    );
}