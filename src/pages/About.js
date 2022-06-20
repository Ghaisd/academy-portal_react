import { Achievement } from "../Components/Achievement";
import { Student } from "../Components/Student";
import styles from "./About.module.css";
import { useState, useEffect } from 'react';
// Hard Coded data -- just for now -- before deployment

const nrOfAchievements = ["2", "13", "10", "9"];
const iconAchievements = [
  "bi bi-check-square-fill",
  "bi bi-people-fill",
  "bi bi-award-fill",
  "bi bi-trophy-fill",
];
const finishedAchievements = [
  "runder gjennomført",
  "studenter starter",
  "som fullførte",
  "av disse jobber i dag innen IT",
];

const studentsImages = [
  "/images/Khashayar.jpg",
  "/images/iro.jpg",
  "/images/GhaisDahdouh.png",
  "/images/Lutpullah.jpg",
  "/images/Steffen4.png",
  "/images/Tor.png",
  "/images/Mohammad.jpg",
];
const studentsNames = [
  "Argyro Zaouti",
  "Ghais Dahdouh",
  "Khashayar Nariman",
  "Lutpulla Ekrem",
  "Steffen Wold",
  "Tor Pettersen",
];

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

const About = () => {
  const [studentsFromApi, setStudentsFromApi] = useState('');
// onMount
useEffect(() => {
  fetch("https://localhost:7045/api/user").then((res) => res.json()).then((res) => setStudentsFromApi(res)  
  );
  console.log(studentsFromApi.length)
}, []);
  const achievementsRendered = [];
  for (let i = 0; i < nrOfAchievements.length; i++) {
    achievementsRendered.push(
      <Achievement
        iconAchievement={iconAchievements[i]}
        nrOfAchievement={nrOfAchievements[i]}
        finishedAchievement={finishedAchievements[i]}
      />
    );
  };

   const studentsRendered = [];
   if (studentsFromApi.length > 0)
  for (let i = 0; i < studentsNames.length; i++) {
    studentsRendered.push(
      <Student
        src={studentsFromApi[i].ProfileImage}
        studentName={studentsFromApi[i].Name}
        smallInfo ={studentsFromApi[i].ShortInfo}
        gitAccount= {studentsFromApi[i].Github}
         name={studentsNames[i].replace(/ .*/,'')}
        id = {i+1}
      />
    );
  };


  return (
    <>

    
<section className={styles.team}>
        <h2 onClick={()=>console.log(studentsFromApi.length)}>Årets kull</h2>
        <div className={`${styles.container} ${styles.team__container}`}>
            {studentsRendered}
        </div>
    </section>

      <section className={styles.about__achievements}>
        <div
          className={`${styles.container} ${styles["about__achievements-container"]}`}
        >
          <div className={styles["about__achievements-left"]}>
            <img
              src="/images/about_achievements.svg"
              style={{ top: "10rem" }}
              alt="achievement"
            />
          </div>

          <div className={styles["about__achievements-right"]}>
            <h1>Resultater</h1>
            <p>
              Vi jobber for å få folk ut av NAV-systemet og inn i helt nye
              karrierer, og det på rekordtid. Det er ikke småtteri. Vi er mange
              som er med på å gjøre dette mulig, det være seg den eminente
              foreleseren fra Nederland, et fantastisk samarbeid med ildsjeler i
              NAV, våre egne mentorer fra Ikomm, praksisbedrifter, og mest av
              alt, kandidatene selv som griper denne sjansen med blod, svette,
              og tårer. Vi er stolte over de resultatene vi sammen har oppnådd
              med Ikomm Academy, her er de mest synlige av dem.
              <strong>I tillegg</strong> er vi veldig godt i gang med den tredje
              gjennomføringen av Ikomm Academy. Det er i år 7 studenter, og ting
              fungerer bedre enn noen gang. Til høsten gleder vi oss til å
              presentere mange nye IT-talenter til samfunnet.
            </p>
            <div className={styles.achievements__cards}>
              {achievementsRendered}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
