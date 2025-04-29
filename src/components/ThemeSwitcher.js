import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext('light');

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemedContent />
    </ThemeContext.Provider>
  );
}

function ThemedContent() {
  const theme = useContext(ThemeContext);
  const themedStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div style={themedStyle}>
      <p>This content is themed!</p>
      {/* Render other themed components here */}
    </div>
  );
}

export default ThemeSwitcher;