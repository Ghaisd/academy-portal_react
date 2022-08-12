import {
  Button, Input, Link, TextField, Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const Contact = () => {
  return (
    <Box
      bgcolor="#474a48"
      p="4rem"
      display="grid"
      gap="4rem"
      m="7rem auto"
      maxWidth="70vw"
    >
      <Box
        bgcolor="#537a5a"
        borderRadius="1rem"
        pl="25vw"
      >
        <Box
          component="img"
          src="/images/contact.svg"
          alt="Contact"
          width="300px"
        />
        <Typography borderBottom={1} variant="h4">Kontakt oss</Typography>
        <Typography variant="h6">
          Kontakt oss for mer informasjon.
        </Typography>
        <Link ml="2rem" color="#fff" borderRadius="5%" fontSize="2.2rem" href="https://www.facebook.com/ikommas/" target="_blank" rel="noreferrer">
          <i className="bi bi-facebook" />
        </Link>
        <Link ml="2rem" color="#fff" borderRadius="5%" fontSize="2.2rem" href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin" />
        </Link>

      </Box>

      <Box
        component="form"
        action="https://formspree.io/f/xeqnvgjb"
        method="POST"
        sx={{
          '& > div >*,& >div >div>*': {
            width: '100%',
            p: '1rem',
            bgcolor: '#2c302e',
            color: 'lightgray',
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{
          }}
        >
          <Input
            type="text"
            name="First Name"
            placeholder="Fornavn"
            required
          />
          <Input
            type="text"
            name="Last Name"
            placeholder="Etternavn"
            required
          />
        </Box>
        <Box mb="1rem">
          <Input
            type="email"
            name="Email Address"
            placeholder="Din epostadresse"
            required
          />
          <TextField
            name="Message"
            multiline
            rows="7"
            placeholder="Beskjed"
            required
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="success"
        >
          sende melding
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
