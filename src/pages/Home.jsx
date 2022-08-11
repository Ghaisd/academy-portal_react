import {
  Navigation, Pagination, Scrollbar, A11y, Virtual,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Category from '../Components/Category';
import Article from '../Components/Article';
import Faq from '../Components/Faq';
import Testimonial from '../Components/Testimonial';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import categories from '../Data/categories';
import faqs from '../Data/faqs';
import testimonials from '../Data/testimonials';
import { staticTextHome } from '../Data/staticText';
import articles from '../Data/articles';
import Button from '../Components/UI/Button';

const {
  headerSectionTextH,
  headerSectionTextP,
  categoriesSectionTextH,
  categoriesSectionTextP,
} = staticTextHome;

const Home = () => {
  return (
    <>
      <Box
        height="60vh"
        pl="12.5rem"
        display="grid"
        gridTemplateColumns="1fr 1fr"
        alignItems="center"
        gap="5rem"
      >
        <div>
          <Typography variant="h3">{headerSectionTextH}</Typography>
          <Typography variant="h6" sx={{ m: '1rem 0 1.4rem' }}>{headerSectionTextP}</Typography>
          <Button to="/Contact">Bli med!</Button>
        </div>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328"
          height="540"
          width="504"
          allowFullScreen
          title="Embedded post"
        />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="40% 60%"
        height="35rem"
        backgroundColor="#474a48"
        mt="5rem"
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

      <Box
        mt="6.25rem"
        bgcolor="#474a48"
        sx={{
          p: '4rem 20rem',
        }}
      >
        <Typography variant="h3" align="center" mb="4rem">Frequently Asked Questions</Typography>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap="2rem">
          {faqs.map((faq) => (
            <Faq
              key={faq.headerText}
              headerText={faq.headerText}
              paragraphText={faq.paragraphText}
            />
          ))}
        </Box>
      </Box>

      <Typography variant="h3" align="center" pt="2rem">Testimonials</Typography>
      <Box className="container" pb="2rem">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <Testimonial
                key={testimonial.name}
                imageLink={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                paragraphText={testimonial.paragraphText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Home;
