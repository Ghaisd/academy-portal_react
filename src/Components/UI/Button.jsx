import ButtonMui from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Button = ({ to, styles, children }) => {
  return (
    <ButtonMui
      component={Link}
      to={to}
      variant="contained"
      size="medium"
      sx={{
        background: '#909590',
        textTransform: 'none',
        '&:hover': {
          background: '#6B6B6B',
          color: 'white',
        },
      }}
      style={styles}
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
