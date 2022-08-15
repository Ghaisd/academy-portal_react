import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from './UI/CustomButton';

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
      width={420}
      mt={6.25}
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
          width: 1,
          height: 270,
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
        <Typography mt={1.2}>{articleContent}</Typography>
      </Box>
      <CustomButton
        to={`/Articles/${id}`}
        styles={{
          marginBottom: '1rem', background: '#dc3545', padding: '1rem 2rem', borderRadius: '5%',
        }}
      >
        Les Mer
      </CustomButton>
    </Box>
  );
};

export default Article;
