import { ThemeProvider } from '@emotion/react';
import { DarkTheme, LightTheme } from './shared/themes';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
