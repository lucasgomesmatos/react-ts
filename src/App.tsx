import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
