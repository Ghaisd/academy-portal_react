import { Box } from '@mui/system';
// eslint-disable-next-line import/no-cycle
import Article from '../Components/Article';
import articles from '../Data/articles';

const Articles = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" m={18} ml={32}>
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
