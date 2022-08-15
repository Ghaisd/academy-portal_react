import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const Faq = ({ headerText, paragraphText }) => {
  const [faqIconClassNames, SetFaqIconClassNames] = useState('bi bi-plus-square');
  const [displayMode, setDisplayMode] = useState('d-none');

  const SetCssClasses = () => {
    if (faqIconClassNames === 'bi bi-plus-square') {
      SetFaqIconClassNames('bi bi-dash-square');
      setDisplayMode('d-inline-block');
    } else {
      SetFaqIconClassNames('bi bi-plus-square');
      setDisplayMode('d-none');
    }
  };
  return (
    <Box
      p={4}
      bgcolor="#537a5a"
      onClick={SetCssClasses}
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Box>
        <i className={faqIconClassNames} />
        <Typography display="inline-block" ml={1} variant="h6">{headerText}</Typography>
      </Box>
      <Typography pt={2} className={displayMode}>{paragraphText}</Typography>
    </Box>
  );
};

export default Faq;
