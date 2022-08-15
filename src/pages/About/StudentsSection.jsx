import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Student from '../../Components/Student';
import participants from '../../Data/participants';

const StudentsSection = () => {
  return (
    <>
      <Typography align="center" variant="h2">Årets kull</Typography>
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} my={8} width={50}>

        {participants.map((student) => (
          <Student
            key={student.Name}
            src={student.Image}
            studentName={student.Name}
            smallInfo={student.ShortInfo}
            GithubLink={student.GithubLink}
          />
        ))}
      </Box>
    </>
  );
};

export default StudentsSection;
