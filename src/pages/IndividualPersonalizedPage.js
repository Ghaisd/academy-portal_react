import styles from "./IndividualPersonalizedPage.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const IndividualPersonalizedPage = () => {
  const { id } = useParams();
  const [studentsFromApi, setstudentsFromApi] = useState('');
  const [index, setIndex] = useState(0);
  const studentsImages = [
    "/images/Khashayar.jpg",
    "/images/GhaisDahdouh.png",
    "/images/iro.jpg",
    "/images/Lutpullah.jpg",
    "/images/Mohammad.jpg",
    "/images/Steffen4.png",
    "/images/Tor.png",
  ];
  const studentsNames = [
    "Khashayar Nariman",
    "Argyro Zaouti",
    "Ghais Dahdouh",
    "Lutpulla Ekrem",
    "Steffen Wold",
    "Tor Pettersen",
    "Mohammad Kellab",
  ];
   // onMount
   useEffect(() => {
    for (let i = 0; i < studentsNames.length; i++) {
      if (studentsNames[i].replace(/ .*/,'') === id){
        setIndex(i);
      }
    }
    fetch("https://localhost:7045/api/user").then((res) => res.json()).then((res) => setstudentsFromApi(res)  
    );
  }, []);


 
  // const studentsSmallInfo = [
  //   "Mastergrad i infrastruktur og teknologi(Sjarmtrollet).",
  //   "Deltidsstudent i programmering på NTNU(Ledertypen).",
  //   "Erfaren hobby-programmerer, med lang fartstid i Python(Backend-king).",
  //   "Selvlært utvikler og selenium-tester(Menneskerettighetsforkjemperen).",
  //   "Grafisk artist og selvlært utvikler(The Brogrammer).",
  //   "Frontend wizard med over 10 års fartstid i Javascript(Den kreative).",
  //   "Kode-talent med skyhøyt toppnivå(Problemløseren). ",
  // ];
  
  // const studentsGitAccounts = [
  //   "https://github.com/Iro83",
  //   "https://github.com/Ghaisd",
  //   "https://github.com/kkhashayar",
  //   "https://github.com/lutpullaekrem",
  //   "https://github.com/medosteve",
  //   "https://github.com/Nullcano",
  //   "https://github.com/Tor-A-P",
  // ];
  if(studentsFromApi.length > 0)
  return (
    <section className={styles.home} id="home">
      <div className={styles["home-text"]}>
        <h3>Hallo, jeg er</h3>
        <br />
        <h1>
          {studentsFromApi[index].Name}
        </h1>
        <br />
        <h5>Student at Ikomm Academy</h5>
        <p>{studentsFromApi[index].ShortInfo}</p>
        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={studentsFromApi[index].Github} target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <a href="#" className={styles.btn}>
          Last ned CV
        </a>
      </div>
      <div className={styles["home-img"]}>
        <img
          className={styles["profile-img"]}
          src={studentsFromApi[index].ProfileImage}
          alt="ProfilePic"
        />
      </div>
    </section>
  );
};

export default IndividualPersonalizedPage;

{
  /* // {if (tempArticles.Count() > 0)
    // {
    //     <br>
    //     <h2 id="header_articles_written">Artikler skrevet:</h2>
    //     <br>
    // }
    // <div>
    //     <div id="list_articles_written">
    //         @foreach (var article in tempArticles)
    //         {
    //             <ul>
    //                 <li>
    //                     <h3 className="underline">
    //                         <em>
    //                             <a Href="Articles/@article.Id" Typo="Typo.body5" id="article_written">
    //                                 @article.Title
    //                             </a>

    //                         </em>
    //                     </h3>
    //                 </li>
    //             </ul>
    //         }
    //     </div>
    // </div> */
}
