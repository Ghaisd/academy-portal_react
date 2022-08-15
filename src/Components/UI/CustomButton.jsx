import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CustomButton = ({ to, styles, children }) => {
  return (
    <Button
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
          transition: 'all 400ms ease',
        },
      }}
      style={styles}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
