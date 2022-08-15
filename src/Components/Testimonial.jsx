import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Testimonial = ({
  imageLink, name, role, paragraphText,
}) => {
  return (
    <Box mt={6}>
      <Avatar
        alt="Remy Sharp"
        src={imageLink}
        sx={{ width: 84, height: 84, m: '0 auto 1rem' }}
      />

      <Box textAlign="center">
        <Typography variant="h6">{name}</Typography>
        <Typography fontSize={12} pt={1} pb={2}>{role}</Typography>
      </Box>
      <Box bgcolor="#537a5a" p={4} borderRadius={5}>
        <Typography>
          {paragraphText}
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonial;
