import { Box, Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Link, Typography } from '@mui/material';
import CustomLink from './UI/CustomLink';

const Footer = () => {
  return (
    <Box bgcolor="#474a48" px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Container maxWidth="xxl">
        <Grid container spacing={20} borderBottom={1}>
          <Grid item xs={12} sm={4}>
            <Box mr="4rem">
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                <CustomLink to="/">
                  IKOMM ACADEMY
                </CustomLink>
              </Typography>
              <Typography pt="1rem">
                Talent finnes overalt for den som leter.
              </Typography>
              <Box
                component="img"
                src="/images/Logo_Transparent_hvit.png"
                alt="logo"
                mt="3rem"
                width="300px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" borderBottom={1}>Sidemeny</Typography>
            <Box>
              <CustomLink to="/Home">Hjem</CustomLink>
              <CustomLink to="/Articles">Siste nytt</CustomLink>
              <CustomLink to="/About">Kandidatene</CustomLink>
              <CustomLink to="/AcademyTV">Academy TV</CustomLink>
              <CustomLink to="/Contact">Kontaktinfo</CustomLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" borderBottom={1}>Kontaktinfo</Typography>
            <Box>
              <Typography variant="h6">94970223</Typography>
              <Typography variant="h6">academy@ikomm.no</Typography>
              <Box mt="1rem">
                <Link ml="2rem" color="#fff" borderRadius="5%" fontSize="2.2rem" href="https://www.facebook.com/ikommas/" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook" />
                </Link>
                <Link ml="2rem" color="#fff" borderRadius="5%" fontSize="2.2rem" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography textAlign="center" mt="3rem" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Copyright &copy;2022 IKOMM-ACADEMY
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
