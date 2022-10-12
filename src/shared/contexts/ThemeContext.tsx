import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { DarkTheme, LightTheme } from '../themes';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

// Resolver a questão do children
interface IAppThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light',
    );
  }, []);

  const theme = useMemo(() => {
    return themeName === 'light' ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width={'100vw'}
          height={'100vh'}
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
