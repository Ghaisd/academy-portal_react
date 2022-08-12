import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Category from '../../Components/Category';
import categories from '../../Data/categories';
import { staticTextHome } from '../../Data/staticText';
import Button from '../../Components/UI/Button';

const {
  categoriesSectionTextH,
  categoriesSectionTextP,
} = staticTextHome;

const CategoriesSection = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="40% 60%"
      height="35rem"
      backgroundColor="#474a48"
      p="100px 40px 0 200px"
    >
      <Box mr="4rem">
        <Typography variant="h3">{categoriesSectionTextH}</Typography>
        <Typography sx={{ m: '1rem 0 3rem' }} variant="h6">{categoriesSectionTextP}</Typography>
        <Button to="/About">Les mer</Button>
        <Button to="/AcademyTV" styles={{ marginLeft: ' 1rem ' }}>Academy TV</Button>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gap="1.2rem"
      >
        {categories.map((category) => (
          <Category
            key={category.headerText}
            headerText={category.headerText}
            paragraphText={category.paragraphText}
            categoryIcon={category.iconClass}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesSection;
