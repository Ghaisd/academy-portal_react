import Article from '../Components/Article';
import Category from '../Components/Category';
import CustomLink from '../Components/CustomLink';
import styles from './Home.module.css'

let headerTextsCategory = [ "Kodespråk", "Problemløsning", "Samarbeid og kommunikasjon", "Metode og prosess"];
  let paragraphTextsCategory = [
    "Vi fokuserer på å bygge en grunnmur med C# og ASP.NET, med innslag av HTML/CSS og JavaScript. Etterhvert i kurset kan man spesialisere seg litt mer, og gjerne velge litt retning. Vi kombinerer forelesninger med oppgaver, mini-prosjekter og et større case study - og til slutt sitter man igjen med et ganske bredt erfaringsgrunnlag.",
    "Utvikling er mer enn noe annet fortløpende problemløsning, med Google som en bestevenn. Det krever god problemforståelse, og så er det ett eget lite håndverk å søke etter og vurdere mulige løsninger.",
    "Den største forskjellen når man går fra hobbytilværelse til en profesjonell utviklerhverdag, handler om at man inngår i et team, i en organisasjon, med kunder. Det stiller helt andre krav til både kommunikasjon og dokumentasjon.",
    "En utviklerhverdag kjennetegnes også av noen metoder og prosesser som får hjulene til å gå rundt. I Academy prøver vi å snikinnføre noen prinsipper her og der, uten at teorien tar overhånd."
]
let iconClassCategory = [ "bi bi-laptop", "bi bi-chat-dots-fill", "bi bi-people-fill", "bi bi-gear-fill"];
/*****************************************/
let articleComponentHeadline =
[

  "Demo Day vel overstått", "En homage til Erik", "Why I love .NET?"
]

let  articleComponentImage =
[

  "/images/En portal til Ikomm Academy.png", "/images/Homage til Erik.png" , "/images/dotnet.jpg"
]

let  articleComponentAuthor =
    [

      "Ghais", "Tor", "Argyro"
  ]

  let  articleComponentContent =
[
  "Det har etterhvert blitt en fin tradisjon med Demo Day, der Ikomm inviterer inn en rekke interesserte mennesker for å vise frem studentenes Case Study-prosjekter. Dette er prosjekter det har blitt jobbet med i en månede, og markerer både siste del av kursperioden, og siste dagen med Erik som kursholder. Etter dette er det praksis, og forberedelser til den, som står på menyen. Dagen bød på en rekke fine presentasjoner og tilogmed noen overraskelser, her har vi laget en liten oppsummering av de prosjektene som ble vist frem.",
  "Erik har vært fantastisk med oss, så vi ønsket å være litt fantastiske tilbake. Her har vi laget en collage av gode minner som vi kaller for «En homage til Erik». Stykket er tonesatt av Kjetil Nordbye på Flygel og Kristian Enge på Tamburin.",
  ".NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is primarily developed by Microsoft employees by way of the .NET Foundation, and released under the MIT License.",
]
const Home = (props) => {

  const categoriesRendered = [];
  for (let i = 0; i < headerTextsCategory.length; i++) {
    categoriesRendered.push(<Category headerText={headerTextsCategory[i]} paragraphText={paragraphTextsCategory[i]}
      category__icon={iconClassCategory[i]}/>)
  }

  const articlesRendered = [];
  for (let i = 0; i < articleComponentAuthor.length; i++) {
    articlesRendered.push(<Article headline={articleComponentHeadline[i]} author={articleComponentAuthor[i]} articleContent={articleComponentContent[i]}
    src={process.env.PUBLIC_URL + articleComponentImage[i]}/>)
    
  }

  return (
    /* ======================= HEADER ========================*/
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
            fortalt henter vi med Ikomm Academy kodetalenter ut av NAV-systemet,
            skolerer dem i moderne utviklingsprinsipper og kodespråk, og får dem
            ut i arbeid - enten hos oss eller hos noen andre. Vi som
            arbeidsgiver får tak i kompetanse vi mangler, NAV får folk ut i
            arbeid, samfunnet utnytter ressursene våre bedre, og ikke minst får
            kandidatene selv en helt unik mulighet til å slå seg opp i en
            karriere full av fremtidsmuligheter.
          </p>
          <CustomLink to ="/Contact" className={`btn-secondary ${styles.btn_header}`}>
            Bli med!
          </CustomLink>
        </div>

        <div className="header__right">
          <div className="header__right-image">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328"
              height="540"
              width="504"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </div>
        </div>
      </div>
    </header>

{/*--=========================================Categories=========================================*/}

<section className={styles.categories}>
    <div className={`${styles.container} ${styles.categories__container}`}>
        <div className={styles.categories__left}>
            <h1>Hva fokuserer vi på i Ikomm Academy?</h1>
            <p>
                Vi tror det er viktig å ikke bare fokusere på tekniske ferdigheter, når man skal løfte utviklertalenter opp fra et hobby-nivå til et profesjonelt junior-nivå.
                Å jobbe som utvikler i dag stiller stadig større krav til de mykere ferdighetene, i tilegg til at man aldri blir utlært som utvikler.
            </p>
            <div className={styles.categories_btn_wrapper}>
            <CustomLink to="/About" className={`btn-secondary ${styles.categories_btn}`}>Les mer</CustomLink>
            <CustomLink to="/AcademyTV" className={`btn-secondary ${styles.categories_btn}`} >AcademyTV </CustomLink>
            </div>
        </div>

        <div className={styles.categories__right}>           
           {categoriesRendered}
        </div>
        <section className={styles.articles}>
        <h2>Artikler/Nyheter</h2>
        <div className={`${styles.container} ${styles.articles__container}`}>
        {articlesRendered}
        </div>
        </section>
    </div>
</section>
</>
  );
  
          }

export default Home;