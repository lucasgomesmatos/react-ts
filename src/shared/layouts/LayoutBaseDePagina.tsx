import {
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <Box
        sx={{
          padding: 1,
          height: theme.spacing(12),
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>
        <Typography>Barra de Ferramentas</Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
