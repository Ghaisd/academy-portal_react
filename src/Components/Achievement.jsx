import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Achievement = ({ iconAchievement, nrOfAchievement, finishedAchievement }) => {
  return (
    <Box
      bgcolor="#474a48"
      p="1.6rem"
      borderRadius="1rem"
      textAlign="center"
      sx={{
        i: {
          bgcolor: '#537a5a',
          p: '0.6rem',
          borderRadius: '1rem',
          display: 'inline-block',
          mb: '2rem',
          fontSize: '2rem',
        },
      }}
    >
      <i className={iconAchievement} />
      <Typography variant="h4" pb="1rem">{nrOfAchievement}</Typography>
      <Typography variant="h5">{finishedAchievement}</Typography>
    </Box>
  );
};

export default Achievement;
