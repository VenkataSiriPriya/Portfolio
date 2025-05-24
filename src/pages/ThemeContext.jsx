// src/pages/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';

const defaultTheme = {
  primaryColor: '#06B6D4', // cyan-500 default
  accentColor: '#0891B2',  // cyan-600 default
  flippedPrimaryColor: '#F97316', // orange-500 flipped
  flippedAccentColor: '#EA580C',  // orange-600 flipped
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleTheme = () => setIsFlipped(prev => !prev);

  return (
    <ThemeContext.Provider value={{ ...defaultTheme, isFlipped, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
