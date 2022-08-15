import { Box } from '@mui/system';
import AchievementsSection from './About/AchievementsSection';
import StudentsSection from './About/StudentsSection';

const About = () => {
  return (
    <Box py={10}>
      <StudentsSection />
      <AchievementsSection />
    </Box>
  );
};

export default About;
