import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import participants from '../Data/participants';
import CustomButton from '../Components/UI/CustomButton';
import CustomIcon from '../Components/UI/CustomIcon';

const IndividualPersonalizedPage = () => {
  const [participant, setParticipant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const individualParticiapnt = participants.find((x) => x.Name === id);
    setParticipant(individualParticiapnt);
  }, [id, setParticipant]);

  return (
    <Box py={30} display="flex" alignItems="center" justifyContent="center" gap={24}>
      <Box>
        <Typography color="#f75023" variant="h4">Hallo, jeg er</Typography>
        <br />
        <Typography variant="h2">{`${participant.Name} ${participant.LastName}`}</Typography>
        <br />
        <Typography variant="h6">Student at Ikomm Academy</Typography>
        <br />
        <Typography variant="h5" color="#a09dab">{participant.ShortInfo}</Typography>
        <br />
        <Box mb={2}>
          <CustomIcon href="https://linkedin.com" iconType="bi bi-linkedin" />
          <CustomIcon href={participant.GithubLink} iconType="bi bi-github" />
        </Box>
        <CustomButton to="/#" styles={{ backgroundColor: '#f75023', borderRadius: 20 }}>
          Last ned CV
        </CustomButton>
      </Box>
      <Box
        component="img"
        borderRadius="30px"
        alt="ProfilePic"
        src={participant.Image}
      />
    </Box>
  );
};

export default IndividualPersonalizedPage;
