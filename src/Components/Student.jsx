import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomIcon from './UI/CustomIcon';

const Student = ({
  src, studentName, smallInfo, GithubLink, LinkedinLink,
}) => {
  return (
    <Box border={10} borderColor="#537a5a" bgcolor="#909590" mr={14}>
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src={src}
          alt="Student"
          height="300px"
        />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <CustomIcon href={`/About/${studentName}`} iconType="bi bi-file-earmark-person" />
          <CustomIcon href={LinkedinLink} iconType="bi bi-linkedin" />
          <CustomIcon href={GithubLink} iconType="bi bi-github" />
        </Box>
      </Box>
      <Box>
        <Typography pt={2} variant="h4" align="center">{studentName}</Typography>
        <Typography color="#109" pl={2} variant="h6">{smallInfo}</Typography>
      </Box>
    </Box>
  );
};

export default Student;
