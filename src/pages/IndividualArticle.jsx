import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import articles from '../Data/articles';

const IndividualArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const individualArticle = articles.find((x) => x.id === +id);
    setArticle(individualArticle);
  }, [id, article.Title, setArticle]);

  return (
    <>
      <Box
        component="img"
        height={768}
        display="block"
        my={6}
        mx="auto"
        alt="Article"
        src={[article.ImageLInk]}
      />
      <Typography variant="h3" textAlign="center">
        {article.Title}
      </Typography>
      <Box
        component="img"
        alt="Article"
        src={article.AuthorImageLink}
        mb={6}
        width={128}
      />
      <Box display="inline-block" ml={2} textTransform="uppercase">
        <Typography variant="h5">{article.AuthorName}</Typography>
        <Typography pt={2}>May 18, 2022</Typography>
      </Box>

      <Typography
        variant="h5"
        mb={12}
        mx="auto"
        lineHeight={2}
        sx={{
          inlineSize: '80vw',
        }}
      >
        {article.Content}

      </Typography>
    </>
  );
};

export default IndividualArticle;
