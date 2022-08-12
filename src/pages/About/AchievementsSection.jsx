import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { staticTextAbout } from '../../Data/staticText';
import achievements from '../../Data/achievements';
import Achievement from '../../Components/Achievement';

const AchievementsSection = () => {
  const { achievementsSectionTextP } = staticTextAbout;

  return (
    <Box display="flex">
      <Box
        component="img"
        alt="achievement"
        src="/images/about_achievements.svg"
      />
      <Box>
        <Typography variant="h3">Resultater</Typography>
        <Typography>
          {achievementsSectionTextP}
        </Typography>
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
  );
};

export default AchievementsSection;
