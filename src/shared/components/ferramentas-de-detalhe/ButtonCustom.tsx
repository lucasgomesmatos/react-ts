import { Button, Icon, Typography } from '@mui/material';

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
  return (
    <Button
      onClick={onClick}
      color="primary"
      variant={variant}
      disableElevation
      startIcon={<Icon>{icon}</Icon>}
    >
      <Typography
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
