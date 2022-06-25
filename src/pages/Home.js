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

const Home = (props) => {
  const [articlesFromApi, setarticlesFromApi] = useState("");

  useEffect(() => {
    fetch("https://localhost:7045/api/article")
      .then((res) => res.json())
      .then((res) => setarticlesFromApi(res));
  }, []);

  const categoriesRendered = [];
  for (let i = 0; i < headerTextsCategory.length; i++) {
    categoriesRendered.push(
      <Category
        headerText={headerTextsCategory[i]}
        paragraphText={paragraphTextsCategory[i]}
        category__icon={iconClassCategory[i]}
      />
    );
  }

  const articlesRendered = [];
  for (let i = 0; i < articlesFromApi.length/2; i++) {
    articlesRendered.push(
      <Article
        key={i}
        headline={articlesFromApi[i].Title}
        author={articlesFromApi[i].AuthorName}
        articleContent={articlesFromApi[i].Content}
        src={process.env.PUBLIC_URL + articlesFromApi[i].ArticleImage}
        id={articlesFromApi[i].Id}
      />
    );
  }

  const faqsRendered = [];
  for (let i = 0; i < headerTextsFaqs.length; i++) {
    faqsRendered.push(
      <Faq
        headerText={headerTextsFaqs[i]}
        paragraphText={paragraphTextFaqs[i]}
      />
    );
  }

  const testimonialsRendered = [];
  for (let i = 0; i < namesTestimonials.length; i++) {
    testimonialsRendered.push(
      <SwiperSlide>
        <Testimonial
          imageLink={process.env.PUBLIC_URL + imagesTestimonials[i]}
          name={namesTestimonials[i]}
          role={rolesTestimonials[i]}
          paragraphText={paragraphTextTestimonials[i]}
        />
      </SwiperSlide>
    );
  }

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
            allowfullscreen=""
            title="Embedded post"
            ></iframe>
        </div>
      </header>

      {/*--=========================================Categories=========================================*/}

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
      {/****************************************Articles{/**************************************** */}
        <h2 id={styles.articles_header}>Artikler/Nyheter</h2>
      <Loading DataLength = {articlesFromApi.length}>
        <section className={styles.articles}>
        <div className={`${styles.container} ${styles.articles__container}`}>
          {articlesRendered}
        </div>
        </section>
      </Loading>

      {/****************************************FAQs{/**************************************** */}

      <section className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        <div className={`${styles.container} ${styles.faqs__container}`}>
          {faqsRendered}
        </div>
      </section>
      {/****************************************Testimonials{/**************************************** */}
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



const headerTextsCategory = [
  "Kodespråk",
  "Problemløsning",
  "Samarbeid og kommunikasjon",
  "Metode og prosess",
];
const paragraphTextsCategory = [
  "Vi fokuserer på å bygge en grunnmur med C# og ASP.NET, med innslag av HTML/CSS og JavaScript. Etterhvert i kurset kan man spesialisere seg litt mer, og gjerne velge litt retning. Vi kombinerer forelesninger med oppgaver, mini-prosjekter og et større case study - og til slutt sitter man igjen med et ganske bredt erfaringsgrunnlag.",
  "Utvikling er mer enn noe annet fortløpende problemløsning, med Google som en bestevenn. Det krever god problemforståelse, og så er det ett eget lite håndverk å søke etter og vurdere mulige løsninger.",
  "Den største forskjellen når man går fra hobbytilværelse til en profesjonell utviklerhverdag, handler om at man inngår i et team, i en organisasjon, med kunder. Det stiller helt andre krav til både kommunikasjon og dokumentasjon.",
  "En utviklerhverdag kjennetegnes også av noen metoder og prosesser som får hjulene til å gå rundt. I Academy prøver vi å snikinnføre noen prinsipper her og der, uten at teorien tar overhånd.",
];
const iconClassCategory = [
  "bi bi-laptop",
  "bi bi-chat-dots-fill",
  "bi bi-people-fill",
  "bi bi-gear-fill",
];

/*******************************************************************/

const headerTextsFaqs = [
  "Hvem kan delta på Ikomm Academy?",
  "Hvor mange deltagere er det?",
  "Hva kreves av forkunnskaper?",
  "Hvor lenge varer kurset?",
  "Hvilke bedrifter kan jeg ha praksis i?",
  "Kan jeg få jobb etter kurset?",
];

const paragraphTextFaqs = [
  "Antallet deltagere varierer litt etter nivået på søkere, og hvor mange søkere vi har. Vi prøver å holde alle på omtrent samme kunnskapsnivå så langt det lar seg gjøre, så hvis vi har mange søkere på samme nivå, har vi flere deltagere. Forrige kurs (2022) hadde 7 deltagere.",
  "Du trenger ingen forkunnskaper for å bli med på Ikomm Academy!  Når det er sagt, så har vi alltid en gjennomgang/testing av potensielle deltagere, og det er klart kurset vil være enklere for de som allerede kan litt, men alle kan lære!",
  "Du trenger ingen forkunnskaper for å bli med på Ikomm Academy! Når det er sagt, så har vi alltid en gjennomgang/testing av potensielle deltagere, og det er klart kurset vil være enklere for de som allerede kan litt, men alle kan lære!",
  " Kurset er 7 måneder (pluss én måned sommerferie), over tre faser: - Kursperioden, som er 2 måneder med forelesninger og intens teori-læring.                  - Prosjektfasen, som er 2 måneder med jobbing i team, hvor man skal lage et faktisk produkt.              - Praksisfasen, som er 3 måneder med praksis i en av de deltagende bedriftene.",
  "Tradisjonelt sett har vi som regel kandidater i praksis enten i Eidsiva Bredbånd, Norkart, eller her i Ikomm.",
  "Det er så klart ikke garantert at du vil ha en jobb med en gang etter kurset, men i de aller fleste tilfeller vi har sett, får våre deltagere jobb eller utvidet praksisperiode i bedriften de har hatt praksis i.",
];

/*******************************************************************/
// Testimonial component
const imagesTestimonials = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
  "/images/avatar5.png",
];
const namesTestimonials = [
  "Tor André Pettersen",
  "Kristian Enge",
  "Marius Kristiansen",
  "Nichlas Bergseter",
  "Erik van Appeldoorn",
];
const rolesTestimonials = [
  "Student 2022",
  "Utviklersjef i Ikomm",
  "Student 2021",
  "Student 2019",
  "Foreleser",
];
const paragraphTextTestimonials = [
  "Det er et skikkelig tøft kurs, med utrolig mye man skal lære på utrolig kort tid, men bare man kommer seg gjennom det, har man lært seg fantastisk mye, skaffet seg nye venner, kontakter i flere IT-selskap, og lært om hvordan det er å jobbe som utvikler! Ekstremt lærerikt kurs!",
  "Som en av initiativtakerne til programmet har det vært skikkelig kult å se hvor bra det faktisk har blitt. Vi har lært mye på veien og gjort endringer underveis, og for oss rundt er det ingen tvil om at det krever mye ressurser å kjøre et sånt opplegg, både før, underveis, og etterpå. Fasiten er allikevel klar, vårt utviklerteam er i dag i mye bedre skikk på grunn av Ikomm Academy, så for oss, Ikomm og forhåpentligvis kundene våre er det helt uvurderlig.",
  " Veldig tøft kurs, lærte utrolig mye! Ga meg også en for i døra til Ikomm, hvor jeg nå jobber som utvikler!",
  "Glad for at jeg fikk bli med på kurset her, det lærte meg mye og ga meg en jobb hos Ikomm. Det er også veldig kult å følge med på nye deltagere, og se hvor mange flinke folk vi finner hvert år.",
  "Helt fantastisk å få muligheten til å trene opp så mange deltagere til å bli fullverdige utviklere! En kjempesjanse for deltagerne, og en super ressurs for Ikomm og de deltagende bedriftene.",
];

export default Home;
