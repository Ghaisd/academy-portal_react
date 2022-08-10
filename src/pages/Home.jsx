import {
  Navigation, Pagination, Scrollbar, A11y, Virtual,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/system';
import Category from '../Components/Category';
import Article from '../Components/Article';
import Faq from '../Components/Faq';
import Testimonial from '../Components/Testimonial';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { categories } from '../Data/categories';
import { faqs } from '../Data/faqs';
import { testimonials } from '../Data/testimonials';
import { staticTextHome } from '../Data/staticText';
import { articles } from '../Data/articles';
import Button from '../Components/UI/Button';

const {
  headerSectionTextH,
  headerSectionTextP,
  categoriesSectionTextH,
  categoriesSectionTextP,
} = staticTextHome;

function Home() {
  return (
    <>
      <Box
        sx={{
          height: '70vh',
          pl: '12.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '5rem',
          'p:first-of-type': {
            m: '1rem 0 1.4rem',
          },
        }}
      >
        <div>
          <h1>{headerSectionTextH}</h1>
          <p>{headerSectionTextP}</p>
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
        sx={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
          height: '35rem',
          backgroundColor: '#474a48',
          mt: '5rem',
          p: '100px 40px 0 200px',

          'div:first-of-type': {
            mr: '4rem',
          },
          'div>p:first-of-type': {
            m: '1rem 0 3rem',
          },
          'div:last-of-type': {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.2rem',
          },
          'a:nth-of-type(2)': {
            ml: '1rem',
          },
        }}
      >
        <div>
          <h1>{categoriesSectionTextH}</h1>
          <p>{categoriesSectionTextP}</p>

          <Button to="/About">Les mer</Button>
          <Button to="/AcademyTV">Academy TV</Button>
          {/* </Box> */}
        </div>
        <div>
          {categories.map((category) => (
            <Category
              key={category.headerText}
              headerText={category.headerText}
              paragraphText={category.paragraphText}
              category__icon={category.iconClass}
            />
          ))}
        </div>
      </Box>

      <Box
        sx={{
          'h2:first-of-type': {
            width: '20%',
            pt: '15rem',
            m: '0 auto',
          },
          'section:first-of-type': {
            ml: '10rem',
          },
          'section>div:first-of-type': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        }}
      >
        <h2>Artikler/Nyheter</h2>
        <section>
          <div>
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
          </div>
        </section>
      </Box>

      {/*= ========================================FAQs========================================= */}

      <Box
        sx={{
          mt: '100px',
          background: '#474a48', // var(--color-bg1);
          boxShadow: 'inset 0 0 3rem rgba(0, 0, 0, 0.5);',
          p: '0 120px 100px 240px',

          'h2:first-of-type': {
            display: 'block',
            width: '50%',
            m: '20px auto',
            padding: '2rem',
          },
          'div:first-of-type': {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          },
        }}
      >
        <h2>Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq) => (
            <Faq
              key={faq.headerText}
              headerText={faq.headerText}
              paragraphText={faq.paragraphText}
            />
          ))}
        </div>
      </Box>

      <Box
        sx={{
          mb: '5rem',

          'h2:first-of-type': {
            p: '2rem 0 0 30rem',
          },
        }}
      >
        <section className="container mySwiper">
          <h2>Testimonials</h2>
          <div className="swiper-wrapper">
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
          </div>
        </section>
      </Box>
    </>
  );
}

export default Home;
