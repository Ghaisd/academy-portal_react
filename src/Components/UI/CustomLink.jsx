/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  return (
    <Box sx={{

      li: {
        listStyleType: 'none',
        boxSizing: 'border-box',
      },
      a: {
        cursor: 'pointer',
        color: 'white',
      },
      'a:hover': {
        color: 'grey',
        transition: 'all 400ms ease',
      },
    }}
    >
      <li>
        <Link style={{ textDecoration: 'none' }} to={to} {...props}>
          {children}
        </Link>
      </li>
    </Box>
  );
};

export default CustomLink;
