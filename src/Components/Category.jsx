import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Category = ({ categoryIcon, headerText, paragraphText }) => {
  const cssIcon = categoryIcon;
  return (
    <Box
      bgcolor="#909590"
      p="2rem"
      borderRadius="2rem"
      sx={{
        '&:hover': {
          boxShadow: '0 3rem 3rem rgba(0, 0, 0, 0.3)',
          zIndex: '1',
        },
      }}
    >
      <Box
        bgcolor="#537a5a"
        p="0.7rem"
        borderRadius="0.9rem"
        width="2.5rem"
      >
        <i className={cssIcon} />
      </Box>
      <Typography m="1rem 2rem 0 0" variant="h6">{headerText}</Typography>
      <Typography mb="1rem">{paragraphText}</Typography>
    </Box>
  );
};

export default Category;
