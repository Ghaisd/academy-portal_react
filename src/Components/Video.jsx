import { CardMedia } from '@mui/material';

const Video = ({ src }) => {
  return (
    <CardMedia
      component="iframe"
      src={src}
      allowFullScreen
      height={250}
    />
  );
};

export default Video;
