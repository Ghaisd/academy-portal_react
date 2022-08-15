import { Link } from '@mui/material';

const CustomIcon = ({ href, iconType }) => {
  return (
    <Link
      ml={2}
      color="#fff"
      borderRadius="5%"
      fontSize={35}
      href={href}
      rel="noreferrer"
      sx={{
        '&:hover': {
          color: '#909590',
          transition: 'all 400ms ease',
        },
      }}
    >
      <i className={iconType} />
    </Link>
  );
};

export default CustomIcon;
