import Article from '../Components/Article';
import styles from './Articles.module.css'
import { useState, useEffect } from 'react';

// const articleComponentHeadline = [
//     "Demo Day vel overstått",
//     "En homage til Erik",
//     "Why I love .NET?",
//     "Når Ikomm Academy gikk full blown hipster",
//     "Det første sammenbruddet er et faktum!",
//     "Suverene vinnere på allmennquizen",
//   ];
  
//   const articleComponentImage = [
//     "/images/En portal til Ikomm Academy.png",
//     "/images/Homage til Erik.png",
//     "/images/dotnet.jpg",
//     "/images/Steffen Mini Project.png",
//     "/images/Breakdown Day.jpg",
//     "/images/Trivia Night.gif",
//   ];
  
//   const articleComponentAuthor = ["Ghais", "Tor", "Argyro", "Aksel", "Aksel", "Kristian"];
  
//   const articleComponentContent = [
//     "Det har etterhvert blitt en fin tradisjon med Demo Day, der Ikomm inviterer inn en rekke interesserte mennesker for å vise frem studentenes Case Study-prosjekter. Dette er prosjekter det har blitt jobbet med i en månede, og markerer både siste del av kursperioden, og siste dagen med Erik som kursholder. Etter dette er det praksis, og forberedelser til den, som står på menyen. Dagen bød på en rekke fine presentasjoner og tilogmed noen overraskelser, her har vi laget en liten oppsummering av de prosjektene som ble vist frem.",
//     "Erik har vært fantastisk med oss, så vi ønsket å være litt fantastiske tilbake. Her har vi laget en collage av gode minner som vi kaller for «En homage til Erik». Stykket er tonesatt av Kjetil Nordbye på Flygel og Kristian Enge på Tamburin.",
//     ".NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is primarily developed by Microsoft employees by way of the .NET Foundation, and released under the MIT License.",
//     "At Steffen ligger litt foran de fleste av oss når det kommer til kreativ frontend-utvikling, tok det ikke lang tid før vi forstod. Allikevel ble vi tatt på senga når det var dags for å presentere mini-prosjekter. Hjemmelaga Pixelart er vi ikke bortskjemte med! Les mer om både Steffens miniprosjekt, og de andre mini-prosjektene, som har preget påsken i Akademiet. ",
//     "Det er ikke mange ting vi vet på forhånd når vi starter opp en ny runde med Ikomm Academy, men at det kommer et sammenbrudd eller fire i løpet av de tre første kursukene, det føler vi oss ganske sikre på. Det må selvfølgelig feires, og ufarliggjøres. Vi letter litt på sløret fra dagbøkene våres. ",
//     "Vi prøvde et nytt konsept i årets introuke, og det var en tradisjonsrik allmennquiz til å avslutte ukens begivenheter. Quizmaster Aksel hadde ikke spart på konfekten, og det var en serie med tøffe spørsmål som ventet de tre lagene. Ekstra gledelig var det at vi fikk med Erlend og Jens Ole fra NAV, og mentor Michael fra Eidsiva, på begivenhetene. Her har vi nok skapt en ny tradisjon. Klikk deg inn for å se både spørsmålene, svarene, og resultatene. ",
//   ];


 

const Articles = () => {
  const [articlesFromApi, setarticlesFromApi] = useState('');
// onMount
useEffect(() => {
  fetch("https://localhost:7045/api/article").then((res) => res.json()).then((res) => setarticlesFromApi(res)  
  );
}, []);

     const articlesRendered = [];
    for (let i = 0; i < articlesFromApi.length; i++) {
      articlesRendered.push(
        <Article
        key={i}
        headline={articlesFromApi[i].Title}
        author={articlesFromApi[i].AuthorName}
        articleContent={articlesFromApi[i].Content}
        src={process.env.PUBLIC_URL + articlesFromApi[i].ArticleImage}
        id={i + 1}
        />
      );
      }
      
    return(       
        <section className={styles.articles}>
    <div className={`${styles.container} ${styles.articles__container}` }>
    {articlesRendered}
    </div>
</section>

    ) ;
};


export default Articles