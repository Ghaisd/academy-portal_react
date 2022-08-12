import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '../../Components/UI/Button';
import { staticTextHome } from '../../Data/staticText';

const {
  headerSectionTextH,
  headerSectionTextP,
} = staticTextHome;

const Header = () => {
  return (
    <Box
      height="70vh"
      pl="12.5rem"
      display="grid"
      gridTemplateColumns="1fr 1fr"
      alignItems="center"
      gap="5rem"
    >
      <Box>
        <Typography variant="h3">{headerSectionTextH}</Typography>
        <Typography variant="h6" sx={{ m: '1rem 0 1.4rem' }}>{headerSectionTextP}</Typography>
        <Button to="/Contact">Bli med!</Button>
      </Box>
      <CardMedia
        sx={{ height: 540, width: 504 }}
        component="iframe"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328"
        allowFullScreen
        title="Embedded post"
      />
    </Box>
  );
};
export default Header;
