import { motion } from 'framer-motion';
import TarifCard from './TarifCard';

export default function SectionTarifs() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-5xl"
        >
            <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold font-poppins mb-2 text-gray-900 dark:text-white"
            >
                Tarifs
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-500 dark:text-gray-300 mb-8"
            >
                Choisissez le plan qui vous convient le mieux
            </motion.p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
                <TarifCard
                    title="Essentiel"
                    price="Gratuit"
                    features={[
                        "Génération d'excuse de base",
                        "Personnalisation limitée",
                        "Accès à quelques catégories"
                    ]}
                    buttonLabel="Sélectionner"
                    delay={0.2}
                />
                <TarifCard
                    title="Pro"
                    price="2,99 /Mois"
                    features={[
                        "Excuses Avancée",
                        "Personnalisation complète",
                        "Toutes les catégories"
                    ]}
                    buttonLabel="Sélectionner"
                    delay={0.4}
                />
            </div>
        </motion.section>
    );
} 