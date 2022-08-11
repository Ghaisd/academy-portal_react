import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Loading from '../Components/UI/Loading';
import articles from '../Data/articles';

const IndividualArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const individualArticle = articles.find((x) => x.id === +id);
    setArticle(individualArticle);
  }, [id, article.Title, setArticle]);

  return (
    <Loading DataLength={article}>
      <Box
        component="img"
        sx={{
          height: '48rem',
          display: 'block',
          m: '3rem auto',
        }}
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
        mb="3rem"
        width="8rem"
      />
      <Box display="inline-block" ml="1rem" textTransform="uppercase">
        <Typography variant="h5">{article.AuthorName}</Typography>
        <Typography pt="1rem">May 18, 2022</Typography>
      </Box>

      <Typography
        variant="h5"
        m="0rem 0 6rem"
        pl="14rem"
        lineHeight="2.5rem"
        sx={{
          inlineSize: '80vw',
        }}
      >
        {article.Content}

      </Typography>
    </Loading>
  );
};

export default IndividualArticle;
