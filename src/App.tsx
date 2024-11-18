import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="p-2 bg-primary text-lightText rounded"
      >
        Toggle Dark Mode
      </button>

      {/* Primary Block */}
      <div className="bg-primary text-lightText dark:bg-darkPrimary dark:text-darkText p-4">
        This is a block with the primary background color and light text.
      </div>

      {/* Secondary Text */}
      <div className="text-secondary dark:text-darkSecondary">
        This is text using the secondary color.
      </div>

      {/* Accent Block */}
      <div className="bg-accent text-lightText dark:bg-darkAccent dark:text-darkText p-6">
        This is a highlighted block with accent color and text.
      </div>

      {/* Light Background Section */}
      <div className="bg-backgroundLight dark:bg-backgroundDark text-lightText dark:text-darkText p-8">
        This is a section with light background in light mode and dark background in dark mode.
      </div>
    </>
  );
}

export default App;
