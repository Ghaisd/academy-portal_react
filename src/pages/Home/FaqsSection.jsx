import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Faq from '../../Components/Faq';
import faqs from '../../Data/faqs';

const FaqsSection = () => {
  return (
    <Box
      mt={12.5}
      bgcolor="#474a48"
      p="4rem 20rem"
    >
      <Typography variant="h3" align="center" mb={8}>Frequently Asked Questions</Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={4}>
        {faqs.map((faq) => (
          <Faq
            key={faq.headerText}
            headerText={faq.headerText}
            paragraphText={faq.paragraphText}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FaqsSection;
