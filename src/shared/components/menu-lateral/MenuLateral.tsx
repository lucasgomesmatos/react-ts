import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { ListItemLink } from './ListItemLink';

interface IMenuLateral {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          sx={{
            width: theme.spacing(28),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: theme.spacing(20),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                height: theme.spacing(8),
                width: theme.spacing(8),
              }}
              alt="Lucas Gomes Matos"
              src="https://avatars.githubusercontent.com/u/26460998?v=4"
            />
          </Box>

          <Divider />
          <Box sx={{ flex: '1' }}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  to={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box sx={{}}>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary={'Alternar tema'} />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
