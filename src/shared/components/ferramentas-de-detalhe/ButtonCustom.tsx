import {
  Button,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface IButtonCustomProps {
  children?: string;
  icon: string;
  onClick?: () => void;
  variant?: 'outlined' | 'text' | 'contained';
}

export const ButtonCustom: React.FC<IButtonCustomProps> = ({
  children,
  onClick,
  icon,
  variant = 'outlined',
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Button
      onClick={onClick}
      color="primary"
      variant={variant}
      disableElevation
      startIcon={<Icon>{icon}</Icon>}
    >
      <Typography
        fontSize={smDown ? 10 : 14}
        variant="button"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {children}
      </Typography>
    </Button>
  );
};
