import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Category from '../../Components/Category';
import categories from '../../Data/categories';
import { staticTextHome } from '../../Data/staticText';
import CustomButton from '../../Components/UI/CustomButton';
import { routes } from '../../App';

const {
  categoriesSectionTextH,
  categoriesSectionTextP,
} = staticTextHome;

const CategoriesSection = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="40% 60%"
      height={560}
      backgroundColor="#474a48"
      pt={12}
      pr={5}
      pl={24}
    >
      <Box mr={8}>
        <Typography variant="h3">{categoriesSectionTextH}</Typography>
        <Typography mt={2} mb={6} variant="h6">{categoriesSectionTextP}</Typography>
        <CustomButton to={routes.About}>Les mer</CustomButton>
        <CustomButton to="/AcademyTV" styles={{ marginLeft: ' 1rem ' }}>Academy TV</CustomButton>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gap={2.4}
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
