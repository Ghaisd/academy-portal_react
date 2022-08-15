import { Box } from '@mui/material';
import Video from '../Components/Video';
import videos from '../Data/videos';

const AcademyTV = () => {
  return (
    <Box display="grid" gap={4} gridTemplateColumns="repeat(3, 1fr)" my={25.5}>
      {videos.map((video) => (
        <Video key={video[0]} src={video} />
      ))}
    </Box>
  );
};

export default AcademyTV;
