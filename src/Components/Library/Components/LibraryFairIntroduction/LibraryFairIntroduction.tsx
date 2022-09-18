import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import images from "../../../../Importer/Importer";
import {
  LibraryFairIntroductionBox,
  LibraryFairIntroductionTextBox,
  LibraryFairIntroductionTextBoxTitle,
  LibraryFairIntroductionTextBoxLetter,
  LibraryFairIntroductionImage
} from '../../../../Styles/Library';


const LibraryFairIntroduction = () => {
  return (
      <Box sx={ LibraryFairIntroductionBox }>
          {/* <Box sx={LibraryFairIntroductionImage}>
          <img
              height="100%"
              width="100%"
              src={images['Library/Library(4).jpg']}
              alt="Library Fair"
            />
          </Box>
          <Box sx={LibraryFairIntroductionTextBox}>
              <Typography sx={LibraryFairIntroductionTextBoxTitle}>Library Fair – introduction to the library</Typography>
              <Typography sx={LibraryFairIntroductionTextBoxLetter}>
                  5–9 September, the library welcomes all new, and not so new, students to our
                  <Link href={"#"} sx={{}} underline="hover"> Library Fair</Link> .
                  During Library Fair you can participate in a competition or
                  <Link href={"#"} underline="hover"> sign up for a guided tour 7 Sep </Link>
                   (7 Sep, 8 Sep -fully booked). We also offer fruit the whole week. Welcome!</Typography>
              <Typography>
                 <Link href={"#"} underline="hover"> Read more about being a new student at the library</Link>
              </Typography>
          </Box>     */}
    </Box>
  )
}

export default LibraryFairIntroduction