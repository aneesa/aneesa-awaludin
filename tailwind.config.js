/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9DABF',  // Light Olive Green
        secondary: '#9CA986',  // Muted Sage Green
        accent: '#808D7C',  // Dark Olive Green
        backgroundLight: '#F7F7F7', // Light background for light mode
        backgroundDark: '#2A2A2A', // Dark background for dark mode

        // Dark Mode Colors
        darkPrimary: '#A1B495',  // Darker Olive Green for dark mode
        darkSecondary: '#6F7A57',  // Muted Sage Green for dark mode
        darkAccent: '#4F5A4A',  // Dark Olive Green for dark mode accent

        // Text Colors
        lightText: '#2C3E50',  // Dark gray for text on light background
        lightMutedText: '#7F8C8D',  // Muted gray text for light mode
        darkText: '#ECF0F1',  // Off-white for text on dark background
        darkMutedText: '#BDC3C7',  // Muted gray text for dark mode,
        
        white: '#FCFCFC',
        error: '#EF4444'
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', // For Firefox
          '-ms-overflow-style': 'none', // For IE and Edge
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none', // For Webkit browsers like Chrome and Safari
        },
      });
    },
  ],
}

