import {
  Typography, AppBar, Toolbar, Stack,
} from '@mui/material';
import CustomLink from './UI/CustomLink';
import HideOnScroll from './UI/HideOnScroll';
// eslint-disable-next-line import/no-cycle
import { routes } from '../App';

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
            <CustomLink to={routes.Home}>Hjem</CustomLink>
            <CustomLink to={routes.Articles}>Siste nytt</CustomLink>
            <CustomLink to={routes.About}>Kandidatene</CustomLink>
            <CustomLink to={routes.AcademyTV}>Academy TV</CustomLink>
            <CustomLink to={routes.Contact}>Kontaktinfo</CustomLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
