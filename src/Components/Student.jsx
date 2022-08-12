import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Student = ({
  src, studentName, smallInfo, gitAccount, LinkedinLink,
}) => {
  return (
    <Box border={10} borderColor="#537a5a" bgcolor="#909590" mr="7rem">
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src={src}
          alt="Student"
          height="300px"
        />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Link pt="1rem" color="#fff" borderRadius="5%" fontSize="2.2rem" href={`/About/${studentName}`}>
            <i className="bi bi-file-earmark-person" />
          </Link>
          <Link color="#fff" borderRadius="5%" fontSize="2.2rem" href={LinkedinLink} target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin" />
          </Link>
          <Link color="#fff" borderRadius="5%" fontSize="2.2rem" href={{ gitAccount }} target="_blank" rel="noreferrer">
            <i className="bi bi-github" />
          </Link>
        </Box>
      </Box>
      <Box>
        <Typography pt="1rem" variant="h4" align="center">{studentName}</Typography>
        <Typography color="#000" pl="1rem" variant="h6">{smallInfo}</Typography>
      </Box>
    </Box>
  );
};

export default Student;
