import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../../Components/UI/CustomButton';
import { staticTextHome } from '../../Data/staticText';
// eslint-disable-next-line import/no-cycle
import { routes } from '../../App';

const {
  headerSectionTextH,
  headerSectionTextP,
} = staticTextHome;

const HeaderSection = () => {
  return (
    <Box
      height={800}
      pl={25}
      display="grid"
      gridTemplateColumns="1fr 1fr"
      alignItems="center"
      gap={10}
    >
      <Box>
        <Typography variant="h3">{headerSectionTextH}</Typography>
        <Typography variant="h6" mt={3} mb={2.8}>{headerSectionTextP}</Typography>
        <CustomButton to={routes.Contact}>Bli med!</CustomButton>
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
export default HeaderSection;
