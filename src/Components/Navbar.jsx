import {
  Typography, AppBar, Toolbar, Stack,
} from '@mui/material';
import CustomLink from './UI/CustomLink';
import HideOnScroll from './UI/HideOnScroll';

const Navbar = () => {
  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={{ bgcolor: '#537a5a' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <CustomLink to="/">
              IKOMM ACADEMY
            </CustomLink>
          </Typography>
          <Stack direction="row" spacing={7}>
            <CustomLink to="/Home">Hjem</CustomLink>
            <CustomLink to="/Articles">Siste nytt</CustomLink>
            <CustomLink to="/About">Kandidatene</CustomLink>
            <CustomLink to="/AcademyTV">Academy TV</CustomLink>
            <CustomLink to="/Contact">Kontaktinfo</CustomLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
