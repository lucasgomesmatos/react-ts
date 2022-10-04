import React, { createContext, useState } from 'react';
import { DarkTheme, LightTheme } from '../themes';
import { ThemeProvider } from '@emotion/react';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  return (
    <ThemeContext.Provider value={{ themename, toggleTheme }}>
      <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
