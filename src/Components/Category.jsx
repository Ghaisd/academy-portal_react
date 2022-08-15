import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Category = ({ categoryIcon, headerText, paragraphText }) => {
  const cssIcon = categoryIcon;
  return (
    <Box
      bgcolor="#909590"
      p={2}
      borderRadius={8}
    >
      <Box
        bgcolor="#537a5a"
        p={1.5}
        borderRadius={4}
        width={40}
      >
        <i className={cssIcon} />
      </Box>
      <Typography mt={1} variant="h6">{headerText}</Typography>
      <Typography mt={1} mb={6}>{paragraphText}</Typography>
    </Box>
  );
};

export default Category;
