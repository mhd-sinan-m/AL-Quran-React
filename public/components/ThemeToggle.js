import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is already set in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);

    // Save the theme in localStorage
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-300 dark:bg-gray-700 rounded">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
