import {
  Navigation, Pagination, Scrollbar, A11y, Virtual,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Testimonial from '../../Components/Testimonial';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import testimonials from '../../Data/testimonials';

const TestimonialsSection = () => {
  return (
    <>
      <Typography variant="h3" align="center" pt={4}>Testimonials</Typography>
      <Box className="container" pb={4}>
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

export default TestimonialsSection;
