import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "../Components/Category";
import Article from "../Components/Article";
import CustomLink from "../Components/CustomLink";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import styles from "./Home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loading from "../Components/Loading";
import { categories } from "../Data/categories";
import { faqs } from "../Data/faqs";
import { testimonials } from "../Data/testimonials";

const Home = () => {
  const [articlesFromApi, setarticlesFromApi] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7045/api/article")
      .then((res) => res.json())
      .then((res) => setarticlesFromApi(res));
  }, []);

  const categoriesRendered = categories.map((category, index) => (
    <Category
      key={index}
      headerText={category.headerText}
      paragraphText={category.paragraphText}
      category__icon={category.iconClass}
    />
  ));

  const articlesRendered = articlesFromApi
    .slice(0, 3)
    .map((article, index) => (
      <Article
        key={index}
        headline={article.Title}
        author={article.AuthorName}
        articleContent={article.Content}
        src={process.env.PUBLIC_URL + article.ArticleImage}
        id={article.Id}
      />
    ));

  const faqsRendered = faqs.map((faq, index) => (
    <Faq
      key={index}
      headerText={faq.headerText}
      paragraphText={faq.paragraphText}
    />
  ));

  const testimonialsRendered = testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <Testimonial
        key={index}
        imageLink={testimonial.image}
        name={testimonial.name}
        role={testimonial.role}
        paragraphText={testimonial.paragraphText}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <header>
        <div className={`${styles.container} ${styles.header__container}`}>
          <div className={styles.header__left}>
            <h1>
              Det handler om å gi flinke folk en sjanse, og å finne flinke folk
              som tar den.
            </h1>
            <p className={styles.long__paragraph}>
              Med Ikomm Academy har Ikomm i tett samarbeid med NAV Lillehammer
              bevist at det fortsatt finnes ekte vinn-vinn-situasjoner. Kort
              fortalt henter vi med Ikomm Academy kodetalenter ut av
              NAV-systemet, skolerer dem i moderne utviklingsprinsipper og
              kodespråk, og får dem ut i arbeid - enten hos oss eller hos noen
              andre. Vi som arbeidsgiver får tak i kompetanse vi mangler, NAV
              får folk ut i arbeid, samfunnet utnytter ressursene våre bedre, og
              ikke minst får kandidatene selv en helt unik mulighet til å slå
              seg opp i en karriere full av fremtidsmuligheter.
            </p>
            <CustomLink
              to="/Contact"
              className={`btn-secondary ${styles.btn_header}`}
            >
              Bli med!
            </CustomLink>
          </div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328"
            height="540"
            width="504"
            allowFullScreen
            title="Embedded post"
          ></iframe>
        </div>
      </header>

      {/*=========================================Categories=========================================*/}

      <section className={styles.categories}>
        <div className={`${styles.container} ${styles.categories__container}`}>
          <div className={styles.categories__left}>
            <h1>Hva fokuserer vi på i Ikomm Academy?</h1>
            <p>
              Vi tror det er viktig å ikke bare fokusere på tekniske
              ferdigheter, når man skal løfte utviklertalenter opp fra et
              hobby-nivå til et profesjonelt junior-nivå. Å jobbe som utvikler i
              dag stiller stadig større krav til de mykere ferdighetene, i
              tilegg til at man aldri blir utlært som utvikler.
            </p>
            <div className={styles.categories_btn_wrapper}>
              <CustomLink
                to="/About"
                className={`btn-secondary ${styles.categories_btn}`}
              >
                Les mer
              </CustomLink>
              <CustomLink
                to="/AcademyTV"
                className={`btn-secondary ${styles.categories_btn}`}
              >
                AcademyTV{" "}
              </CustomLink>
            </div>
          </div>

          <div className={styles.categories__right}>{categoriesRendered}</div>
        </div>
      </section>
      {/*--=========================================Article========================================= */}
      <h2 id={styles.articles_header}>Artikler/Nyheter</h2>
      <Loading DataLength={articlesFromApi.length}>
        <section className={styles.articles}>
          <div className={`${styles.container} ${styles.articles__container}`}>
            {articlesRendered}
          </div>
        </section>
      </Loading>

      {/*=========================================FAQs========================================= */}

      <section className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        <div className={`${styles.container} ${styles.faqs__container}`}>
          {faqsRendered}
        </div>
      </section>
      {/*=========================================Testimonials========================================= */}
      <section
        className={`${styles.container} ${styles.testimonials__container} `}
      >
        <section className={`container testimonials__container mySwiper`}>
          <h2>Testimonials</h2>
          <div className={`swiper-wrapper`}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              scrollbar={{ draggable: true }}
              pagination={{ clickable: true }}
            >
              {testimonialsRendered}
            </Swiper>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
