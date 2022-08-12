import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Achievement from '../Components/Achievement';
import Student from '../Components/Student';
import achievements from '../Data/achievements';
import { staticTextAbout } from '../Data/staticText';
import participants from '../Data/participants';

const { achievementsSectionTextP } = staticTextAbout;

const About = () => {
  return (
    <>
      <Typography align="center" mt="2rem" py="4rem" variant="h2">Årets kull</Typography>
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="2rem">

        {participants.map((student) => (
          <Student
            key={student.Name}
            src={student.Image}
            studentName={student.Name}
            smallInfo={student.ShortInfo}
            gitAccount={student.GithubLink}
          />
        ))}
      </Box>

      <Box py="4rem" display="flex">
        <Box
          component="img"
          alt="achievement"
          src="/images/about_achievements.svg"
        />
        <Box>
          <h1>Resultater</h1>
          <p>
            {achievementsSectionTextP}
          </p>
          <Box display="grid" gridTemplateColumns="repeat(2, 4fr)" gap="1.2rem">
            {achievements.map((achievement) => (
              <Achievement
                key={achievement.nr}
                nrOfAchievement={achievement.nr}
                iconAchievement={achievement.icon}
                finishedAchievement={achievement.finished}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
