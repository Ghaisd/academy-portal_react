import { Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';

const ContactForm = () => {
  return (
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
          placeholder="Fornavn"
          required
          sx={{
            borderRight: 1,
          }}
        />
        <Input
          type="text"
          placeholder="Etternavn"
          required
        />
      </Box>
      <Box mb="1rem">
        <Input
          type="email"
          placeholder="Din epostadresse"
          required
        />
        <TextField
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
  );
};
export default ContactForm;
