import '../css/index.css'
import logo from '../assets/logo-toute_page.png'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isDark = localStorage.getItem('dark-mode') === 'dark' ||
            (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'light');
        }
    }, [darkMode]);

    const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDarkMode(e.target.value === 'dark');
    };

    const handleGenerate = () => {
        navigate('/generer');
    };

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex mx-auto justify-between items-center p-4 font-poppins bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Link to="/" className="flex items-center">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={logo}
                        alt="logo"
                        className="w-10 h-10"
                    />
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="ml-3 text-3xl font-bold font-poppins"
                    >
                        Excuse Pro
                    </motion.h1>
                </Link>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="w-6 h-6 text-gray-700 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:flex items-center gap-4 justify-end"
            >
                <motion.select
                    whileHover={{ scale: 1.05 }}
                    name="dark-mode"
                    id="dark-mode"
                    value={darkMode ? 'dark' : 'light'}
                    onChange={handleModeChange}
                    className="w-30 text-gray-100 dark:text-white bg-fuchsia-500 dark:bg-fuchsia-500 px-5 py-2 rounded-2xl cursor-pointer font-poppins font-bold text-md"
                >
                    <option value="light" className="text-gray-700 font-poppins font-bold text-md bg-fuchsia-200">Light</option>
                    <option value="dark" className="text-gray-700 font-poppins font-bold text-md">Dark</option>
                </motion.select>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/fonctionnalites" className="text-md font-bold font-poppins hover:text-fuchsia-600 transition-colors">
                        Fonctionnalités
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/tarifs" className="text-md font-bold font-poppins hover:text-fuchsia-600 transition-colors">
                        Tarifs
                    </Link>
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGenerate}
                    className="bg-fuchsia-600 text-white px-4 py-2 rounded-3xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-bold"
                >
                    Créer une excuse
                </motion.button>
            </motion.div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col p-4 gap-4"
                        >
                            <motion.select
                                whileHover={{ scale: 1.05 }}
                                name="dark-mode-mobile"
                                id="dark-mode-mobile"
                                value={darkMode ? 'dark' : 'light'}
                                onChange={handleModeChange}
                                className="w-full text-gray-100 dark:text-white bg-fuchsia-500 dark:bg-fuchsia-500 px-5 py-2 rounded-2xl cursor-pointer font-poppins font-bold text-md"
                            >
                                <option value="light" className="text-gray-700 font-poppins font-bold text-md bg-fuchsia-200">Light</option>
                                <option value="dark" className="text-gray-700 font-poppins font-bold text-md">Dark</option>
                            </motion.select>
                            <motion.div variants={itemVariants}>
                                <Link
                                    to="/fonctionnalites"
                                    className="text-md font-bold font-poppins block py-2 hover:text-fuchsia-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Fonctionnalités
                                </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link
                                    to="/tarifs"
                                    className="text-md font-bold font-poppins block py-2 hover:text-fuchsia-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Tarifs
                                </Link>
                            </motion.div>
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    handleGenerate();
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-fuchsia-600 text-white px-4 py-2 rounded-3xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-bold"
                            >
                                Créer une excuse
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}