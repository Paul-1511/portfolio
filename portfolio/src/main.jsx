import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

function Main() {
  // Persist theme in localStorage
  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }, [themeName]);

  return (
    <ThemeProvider theme={themeName === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <App currentTheme={themeName} setCurrentTheme={setThemeName} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
