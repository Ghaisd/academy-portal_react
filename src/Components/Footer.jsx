import { Box, Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Typography } from '@mui/material';
import CustomLink from './UI/CustomLink';
import CustomIcon from './UI/CustomIcon';

const Footer = () => {
  return (
    <Box bgcolor="#474a48" mt={8} pb={4}>
      <Container maxWidth="xl">
        <Grid container spacing={20} borderBottom={1}>
          <Grid>
            <Box mr="4rem">
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                <CustomLink to="/">
                  IKOMM ACADEMY
                </CustomLink>
              </Typography>
              <Typography pt={2}>
                Talent finnes overalt for den som leter.
              </Typography>
              <Box
                component="img"
                src="/images/Logo_Transparent_hvit.png"
                alt="logo"
                mt={6}
                width={0.8}
              />
            </Box>
          </Grid>
          <Grid ml={12}>
            <Typography variant="h4" borderBottom={1}>Sidemeny</Typography>
            <Box>
              <CustomLink to="/Home">Hjem</CustomLink>
              <CustomLink to="/Articles">Siste nytt</CustomLink>
              <CustomLink to="/About">Kandidatene</CustomLink>
              <CustomLink to="/AcademyTV">Academy TV</CustomLink>
              <CustomLink to="/Contact">Kontaktinfo</CustomLink>
            </Box>
          </Grid>
          <Grid ml={24}>
            <Typography variant="h4" borderBottom={1}>Kontaktinfo</Typography>
            <Box>
              <Typography variant="h6">94970223</Typography>
              <Typography variant="h6">academy@ikomm.no</Typography>
              <Box>
                <CustomIcon href='"https://www.facebook.com/ikommas/' iconType="bi bi-facebook" />
                <CustomIcon href="https://linkedin.com/company/ikomm" iconType="bi bi-linkedin" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography textAlign="center" mt={8} pt={6}>
          Copyright &copy;2022 IKOMM-ACADEMY
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
