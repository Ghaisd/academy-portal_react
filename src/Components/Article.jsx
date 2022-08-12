import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from './UI/Button';

const Article = ({
  src, headline, author, articleContent, id,
}) => {
  return (
    <Box
      bgcolor="#474a48"
      textAlign="center"
      border="1px solid transparent"
      display="grid"
      gridTemplateRows="auto 1fr auto"
      justifyItems="center"
      width="420px"
      mt="100px"
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
          borderColor: '#537a5a',
        },

      }}
    >
      <Box
        component="img"
        sx={{
          width: '100%',
          height: '16.875rem',
          display: 'block',
        }}
        alt="article"
        src={src}
      />
      <Box p="3rem">
        <Typography variant="h5">{headline}</Typography>
        <small>
          Skrevet av :
          {` ${author}`}
        </small>
        <Typography m="1.2rem 0 2rem">{articleContent}</Typography>
      </Box>
      <Button
        to={`/Articles/${id}`}
        styles={{
          marginBottom: '1rem', background: '#dc3545', padding: '1rem 2rem', borderRadius: '5%',
        }}
      >
        Les Mer
      </Button>
    </Box>
  );
};

export default Article;
