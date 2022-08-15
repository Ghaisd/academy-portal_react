import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Achievement = ({ iconAchievement, nrOfAchievement, finishedAchievement }) => {
  return (
    <Box
      bgcolor="#474a48"
      p={1.6}
      borderRadius={4}
      textAlign="center"
      sx={{
        i: {
          bgcolor: '#537a5a',
          p: 1,
          borderRadius: 2,
          display: 'inline-block',
          mb: 4,
          fontSize: 32,
        },
      }}
    >
      <i className={iconAchievement} />
      <Typography variant="h4" pb={1}>{nrOfAchievement}</Typography>
      <Typography variant="h5">{finishedAchievement}</Typography>
    </Box>
  );
};

export default Achievement;
