import '../css/index.css'
import logo from '../assets/logo-toute_page.png'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

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

    return (
        <nav className="flex mx-auto justify-between items-center p-4 font-poppins bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <Link to="/" className="flex items-center">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <h1 className="ml-3 text-3xl font-bold font-poppins">Excuse Pro</h1>
            </Link>

            <button 
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
            </button>

            <div className="hidden md:flex items-center gap-4 justify-end">
                <select
                    name="dark-mode"
                    id="dark-mode"
                    value={darkMode ? 'dark' : 'light'}
                    onChange={handleModeChange}
                    className="w-30 text-gray-100 dark:text-white bg-fuchsia-500 dark:bg-fuchsia-500 px-5 py-2 rounded-2xl cursor-pointer font-poppins font-bold text-md"
                >
                    <option value="light" className="text-gray-700 font-poppins font-bold text-md bg-fuchsia-200">Light</option>
                    <option value="dark" className="text-gray-700 font-poppins font-bold text-md">Dark</option>
                </select>
                <Link to="/fonctionnalites" className="text-md font-bold font-poppins hover:text-fuchsia-600 transition-colors">Fonctionnalités</Link>
                <Link to="/tarifs" className="text-md font-bold font-poppins hover:text-fuchsia-600 transition-colors">Tarifs</Link>
                <button 
                    onClick={handleGenerate}
                    className="bg-fuchsia-600 text-white px-4 py-2 rounded-3xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-bold"
                >
                    Créer une excuse
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
                    <div className="flex flex-col p-4 gap-4">
                        <select
                            name="dark-mode-mobile"
                            id="dark-mode-mobile"
                            value={darkMode ? 'dark' : 'light'}
                            onChange={handleModeChange}
                            className="w-full text-gray-100 dark:text-white bg-fuchsia-500 dark:bg-fuchsia-500 px-5 py-2 rounded-2xl cursor-pointer font-poppins font-bold text-md"
                        >
                            <option value="light" className="text-gray-700 font-poppins font-bold text-md bg-fuchsia-200">Light</option>
                            <option value="dark" className="text-gray-700 font-poppins font-bold text-md">Dark</option>
                        </select>
                        <Link 
                            to="/fonctionnalites" 
                            className="text-md font-bold font-poppins block py-2 hover:text-fuchsia-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Fonctionnalités
                        </Link>
                        <Link 
                            to="/tarifs" 
                            className="text-md font-bold font-poppins block py-2 hover:text-fuchsia-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tarifs
                        </Link>
                        <button 
                            onClick={() => {
                                handleGenerate();
                                setIsMenuOpen(false);
                            }}
                            className="w-full bg-fuchsia-600 text-white px-4 py-2 rounded-3xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-bold"
                        >
                            Créer une excuse
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}