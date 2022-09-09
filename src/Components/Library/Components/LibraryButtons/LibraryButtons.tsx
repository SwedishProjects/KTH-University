import { Box } from '@mui/material';
import * as React from 'react';
<<<<<<< HEAD
import { BtnBox, LibraryButtonsContainer, BtnsBox } from '../../../../Styles/Library';
import LibraryButton from '../LibraryButton/LibraryButton';
import { Container } from '@mui/system';


const LibraryButtons = () => {
  return (
    <Box sx={BtnsBox}>
      <Container sx={LibraryButtonsContainer}>
        <Box sx={BtnBox}>
          <LibraryButton title={"My Library account"} />
          <LibraryButton title={"Request matrials"} />
          <LibraryButton title={"Book a Group study room"} />
          <LibraryButton title={" Talking books"} />
        </Box>
      </Container>
     </Box>
  );
};

export default LibraryButtons;
=======
import Button from '@mui/material/Button';

const LibraryButton = ({title}) => {
  return (
    <>
      <Button variant="contained">{"title"}</Button>
    </>
  );
};

export default LibraryButton;
>>>>>>> 1bce57bc01867045ab3278b4e7d4a39cb2fff715
