import '../css/index.css'
import logo from '../assets/logo-toute_page.png'
import { useState, useEffect } from 'react';
import React from 'react';

export default function Navigation() { 
    // Initialisation du state selon la classe sur <html> ou le localStorage
    const getInitialMode = () => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('dark-mode')) {
                return localStorage.getItem('dark-mode') === 'dark';
            }
            // Optionnel : détection du mode système
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    };

    const [darkMode, setDarkMode] = useState(false); // état temporaire

        useEffect(() => {
        setDarkMode(getInitialMode()); // mis à jour après le montage (client uniquement)
    }, []);

    // Synchronisation de la classe <html> et du localStorage
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'light');
        }
    }, [darkMode]);

    // Écoute les changements de localStorage (autres onglets)
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

    return (
        <nav className="flex justify-between items-center p-4 font-poppins bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <h1 className="ml-3 text-3xl font-bold font-poppins">Excuse Pro</h1>
            </div>
            <div className="flex items-center gap-4">
                <select
                    name="dark-mode"
                    id="dark-mode"
                    value={darkMode ? 'dark' : 'light'}
                    onChange={handleModeChange}
                        className="text-gray-100 dark:text-white 
                        bg-fuchsia-500 dark:bg-gray-800 
                        px-4 py-2 rounded-3xl cursor-pointer 
                        hover:bg-gray-300 dark:hover:bg-gray-700 font-poppins font-bold text-md"
                >
                    <option value="light" className="text-gray-700 font-poppins font-bold text-md bg-fuchsia-200">Light</option>
                    <option value="dark" className="text-gray-700 font-poppins font-bold text-md">Dark</option>
                </select>
                <a href="/" className="text-md font-bold font-poppins">Fonctionnalités</a>
                <a href="/" className="text-md font-bold font-poppins">Tarifs</a>
                <button type="submit" className="bg-fuchsia-600 text-white px-4 py-2 rounded-3xl cursor-pointer hover:bg-fuchsia-700 font-poppins font-bold">Créer une excuse</button>
            </div>
        </nav>
    )
}

