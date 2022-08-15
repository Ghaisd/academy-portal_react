import HeaderSection from './Home/HeaderSection';
// eslint-disable-next-line import/no-cycle
import CategoriesSection from './Home/CategoriesSection';
import ArticlesSection from './Home/ArticlesSection';
import FaqsSection from './Home/FaqsSection';
import TestimonialsSection from './Home/TestimonialsSection';

const Home = () => {
  return (
    <>
      <HeaderSection />
      <CategoriesSection />
      <ArticlesSection />
      <FaqsSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
