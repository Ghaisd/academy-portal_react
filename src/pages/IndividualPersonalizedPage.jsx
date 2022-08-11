import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import participants from '../Data/participants';
import Button from '../Components/UI/Button';

const IndividualPersonalizedPage = () => {
  const [participant, setParticipant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const individualParticiapnt = participants.find((x) => x.Name === id);
    setParticipant(individualParticiapnt);
  }, [id, setParticipant]);

  return (
    <Box p="12rem 0 18rem" display="flex" alignItems="center" justifyContent="center" gap="12rem">
      <Box>
        <Typography color="#f75023" variant="h4">Hallo, jeg er</Typography>
        <br />
        <Typography variant="h2">{`${participant.Name} ${participant.LastName}`}</Typography>
        <br />
        <Typography variant="h6">Student at Ikomm Academy</Typography>
        <br />
        <Typography variant="h5" color="#a09dab">{participant.ShortInfo}</Typography>
        <br />
        <Box mb="1rem">
          <Link ml="0.5rem" bgcolor="white" color="#000" borderRadius="5%" fontSize="2.2rem" href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin" />
          </Link>
          <Link ml="2rem" bgcolor="white" color="#000" borderRadius="5%" fontSize="2.2rem" href={participant.GithubLink} target="_blank" rel="noreferrer">
            <i className="bi bi-github" />
          </Link>
        </Box>
        <Button to="/#" styles={{ backgroundColor: '#f75023', borderRadius: '30px' }}>
          Last ned CV
        </Button>
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
