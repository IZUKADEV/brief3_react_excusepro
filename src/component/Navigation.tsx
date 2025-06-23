import '../css/index.css'
import logo from '../assets/logo-toute_page.png'
import { useState, useEffect } from 'react';
import React from 'react';

export default function Navigation() { 

    const [darkMode, setDarkMode] = useState(false);

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
    const Voiture: string = "Test";
    console.log(Voiture);

    return (
        <nav className="flex mx-auto justify-between items-center p-4 font-poppins bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <h1 className="ml-3 text-3xl font-bold font-poppins">Excuse Pro</h1>
            </div>
            <div className="flex items-center gap-4 w-1/3 ">
                <select
                    name="dark-mode"
                    id="dark-mode"
                    value={darkMode ? 'dark' : 'light'}
                    onChange={handleModeChange}
                    className=" w-30 text-gray-100 dark:text-white bg-fuchsia-500 dark:bg-fuchsia-500 px-5 py-2 rounded-2xl cursor-pointer font-poppins font-bold text-md"
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

