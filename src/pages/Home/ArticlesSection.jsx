import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Article from '../../Components/Article';
import articles from '../../Data/articles';

const ArticlesSection = () => {
  return (
    <>
      <Typography variant="h3" align="center" pt="12rem">Artikler/Nyheter</Typography>
      <Box justifyItems="center" display="grid" gridTemplateColumns="repeat(3, 1fr)">
        {articles.slice(0, 3).map((article) => (
          <Article
            key={article.id}
            id={article.id}
            headline={article.Title}
            author={article.AuthorName}
            articleContent={article.Content}
            src={article.ImageLInk}
          />
        ))}
      </Box>
    </>
  );
};

export default ArticlesSection;
