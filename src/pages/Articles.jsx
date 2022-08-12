import { Box } from '@mui/system';
import Article from '../Components/Article';
import articles from '../Data/articles';

const Articles = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" m="1rem 0 4rem 7rem">
      {articles.map((article) => (
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
  );
};

export default Articles;
